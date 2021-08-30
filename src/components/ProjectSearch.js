import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { get, mergeWith, invert } from 'lodash';
import * as JsSearch from 'js-search';

import * as styles from './ProjectSearch.module.scss';
import { isEmptyObject } from '../utils';
import withUrlParams from './withUrlParams';
import ProjectSearchInput from './ProjectSearchInput';

class ProjectSearch extends Component {
  constructor(props) {
    super(props);

    const paramMap = {
      language: 'languageType',
      category: 'ossCategory',
      tag: 'projectTag',
      search: 'search',
    };

    this.state = {
      searchResults: [],
      search: null,
      searchQuery: '',
      filterValues: {
        ossCategory: '',
        projectTag: '',
        languageType: '',
      },
      filterResults: [],
      urlParamToInputMap: paramMap,
      inputToUrlParamMap: invert(paramMap),

      // Search Engine settings
      selectedStrategy: 'Prefix match',
      selectedSanitizer: 'Lower Case',
      indexFields: [
        ['slug'],
        ['fullName'],
        ['name'],
        ['description'],
        ['ossCategory', 'title'],
        ['website', 'title'],
        ['projectTags', 'title'],
        ['primaryLanguage'],

        // Nested array syntax doesn't work until this PR is merged:
        // https://github.com/bvaughn/js-search/pull/78/files#diff-5d56a676b2913ba26d67295fe642d9b0R18
        // ['stats', 'languages', '[]', 'name']
      ],
      removeStopWords: true,
    };
  }

  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { data } = nextProps;
      return {
        searchResults: data,
        filterResults: data,
      };
    }
    return null;
  }

  async componentDidMount() {
    this.rebuildIndex();
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      removeStopWords,
      indexFields,
    } = this.state;
    const { data } = this.props;

    const dataToSearch = new JsSearch.Search('slug');
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('slug');
    // dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex();

    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        dataToSearch.tokenizer
      );
    }
    /**
     * defines an indexing strategy for the data
     * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    if (selectedStrategy === 'All') {
      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    }
    if (selectedStrategy === 'Exact match') {
      dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy();
    }
    if (selectedStrategy === 'Prefix match') {
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    }

    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     */
    selectedSanitizer === 'Case Sensitive'
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer());

    indexFields.forEach((field) => dataToSearch.addIndex(field));

    dataToSearch.addDocuments(data); // adds the data to be searched

    this.setState({ search: dataToSearch }, this.initializeFromUrlParams);
  };

  initializeFromUrlParams = () => {
    const { urlParams } = this.props;
    const isEmpty = isEmptyObject(urlParams);

    if (isEmpty) {
      return;
    }

    const filters = this.mergeFiltersWithUrlParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (key === 'search') {
          this.updateSearchQuery({ searchQuery: value });
          return;
        }
        this.updateFilter({ field: key, value });
      }
    });
  };

  /*
   * Map url params to the input names used for filtering and searching
   * Merge in any user input that needs to override the initially provided url params
   */
  mergeFiltersWithUrlParams = () => {
    const { urlParams } = this.props;
    const { filterValues, urlParamToInputMap } = this.state;

    const mappedParams = Object.entries(urlParams).reduce(
      (previousValue, [key, value]) => {
        const filterInputName = urlParamToInputMap[key];
        if (filterInputName) {
          previousValue[filterInputName] = value;
        }

        return previousValue;
      },
      {}
    );

    return mergeWith({ ...mappedParams }, filterValues, (val, src) =>
      val === '' ? src : val
    );
  };

  updateSearchQuery = ({ searchQuery = false }) => {
    const { data } = this.props;
    const { search } = this.state;

    const searchResults =
      searchQuery === '' ? data : search.search(searchQuery);
    this.setState({ searchQuery, searchResults }, this.filterData);
  };

  hasFilter = () => {
    const { filterValues } = this.state;
    return !isEmptyObject(filterValues);
  };

  filterData = () => {
    const { filterValues, searchResults } = this.state;
    const filters = Object.entries(filterValues).filter(
      // eslint-disable-next-line no-unused-vars
      ([field, value]) => value !== ''
    );

    this.updateUrlParams();

    const applyFilters = (i) => {
      return filters.reduce((p, [field, value]) => {
        if (!p) {
          return false;
        }

        if (field === 'ossCategory') {
          return get(i, `${[field]}.title`, false) === value;
        }

        if (field === 'projectTag') {
          if (!i.projectTags) {
            return p;
          }
          return i.projectTags.some((t) => {
            return t && t.title === value;
          });
        }

        if (field === 'languageType') {
          if (!i.stats) {
            return p;
          }
          return i.stats.languages.some((l) => l.name === value);
        }

        return p;
      }, true);
    };

    const results = searchResults.filter(applyFilters);
    this.setState({ filterResults: results });
  };

  updateFilter = (filter) => {
    this.updateFilters([filter]);
  };

  updateFilters = (filters) => {
    if (!Array.isArray(filters)) {
      return;
    }

    const filtersObject = filters.reduce((previousValue, { field, value }) => {
      previousValue[field] = value;
      return previousValue;
    }, {});

    this.setState((prevState) => {
      const newFilterValues = {
        ...prevState.filterValues,
        ...filtersObject,
      };

      return {
        filterValues: newFilterValues,
      };
    }, this.filterData);
  };

  updateUrlParams = () => {
    const { location } = this.props;
    const { filterValues, searchQuery, inputToUrlParamMap } = this.state;

    const allFilters = {
      ...filterValues,
      search: searchQuery !== '' ? searchQuery : '',
    };

    const urlParams = Object.entries(allFilters).reduce(
      (previousValue, [key, value]) => {
        if (value) {
          const prefix = previousValue !== '?' ? '&' : '';
          previousValue += `${prefix}${
            inputToUrlParamMap[key]
          }=${encodeURIComponent(value)}`;
        }
        return previousValue;
      },
      '?'
    );

    const url = location.pathname + urlParams;
    navigate(url, { replace: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { searchQuery, filterValues, filterResults } = this.state;
    const { filterOptions, children } = this.props;
    return (
      <div className={styles.searchContainer}>
        <form onSubmit={this.handleSubmit}>
          <ProjectSearchInput
            searchQueryValue={searchQuery}
            onSearchQueryChange={this.updateSearchQuery}
            filterOptions={filterOptions}
            filterValues={filterValues}
            onFilterChange={this.updateFilter}
          />
        </form>
        <div className={styles.searchChildrenContainer}>
          {children({ projects: filterResults, searchQuery, filterValues })}
        </div>
      </div>
    );
  }
}

ProjectSearch.propTypes = {
  location: PropTypes.object,
  children: PropTypes.func,
  data: PropTypes.array,
  filterOptions: PropTypes.object,
  urlParams: PropTypes.object,
};

export default withUrlParams(ProjectSearch);
