import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import * as JsSearch from 'js-search';

import styles from './ProjectSearch.module.scss';
import ProjectSearchInput from './ProjectSearchInput';

class ProjectSearch extends Component {
  state = {
    searchResults: [],
    search: null,
    removeStopWords: false,
    searchQuery: '',
    selectedStrategy: '',
    selectedSanitizer: '',
    indexFields: [],
    filterValues: {
      ossCategory: '',
      projectTag: '',
      languageType: ''
    },
    filterResults: []
  };

  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine, data } = nextProps;
      return {
        indexFields: engine.indexFields,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
        removeStopWords: engine.removeStopWords,
        searchResults: data,
        filterResults: data
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
      indexFields
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

    indexFields.forEach(field => dataToSearch.addIndex(field));

    dataToSearch.addDocuments(data); // adds the data to be searched

    this.setState({ search: dataToSearch });
  };

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { data } = this.props;
    const { search } = this.state;

    const searchQuery = e.target.value;
    const queryResult = search.search(searchQuery);
    const hasFilter = this.hasFilter();

    if (searchQuery === '' && !hasFilter) {
      this.setState({ searchQuery, searchResults: data, filterResults: data });
    }

    if (searchQuery === '' && hasFilter) {
      this.setState({ searchQuery, searchResults: data }, this.filterData);
    }

    if (searchQuery && hasFilter) {
      this.setState(
        {
          searchQuery,
          searchResults: queryResult
        },
        this.filterData
      );
    }

    if (searchQuery && !hasFilter) {
      this.setState({
        searchQuery,
        searchResults: queryResult,
        filterResults: queryResult
      });
    }
  };

  hasFilter = () => {
    const { filterValues } = this.state;
    const isEmpty = !Object.values(filterValues).some(
      x => x !== null && x !== ''
    );
    return !isEmpty;
  };

  onFilterChange = ({ field, value }) => {
    const { searchQuery } = this.state;

    if (searchQuery) {
      this.filterSearchQueryResults({ field, value });
      return;
    }

    this.updateFilter({ field, value });
  };

  filterData = () => {
    const { filterValues, searchResults } = this.state;
    const filters = Object.entries(filterValues).filter(
      // eslint-disable-next-line no-unused-vars
      ([field, value]) => value !== ''
    );

    const applyFilters = i => {
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
          return i.projectTags.some(t => {
            return t && t.title === value;
          });
        }

        if (field === 'languageType') {
          if (!i.stats) {
            return p;
          }
          return i.stats.languages.some(l => l.name === value);
        }

        return p;
      }, true);
    };

    const results = searchResults.filter(applyFilters);
    this.setState({ filterResults: results });
  };

  updateFilter({ field, value }) {
    this.setState(
      prevState => ({
        filterValues: {
          ...prevState.filterValues,
          [field]: value
        }
      }),
      this.filterData
    );
  }

  filterSearchQueryResults = ({ field, value }) => {
    this.updateFilter({
      field,
      value
    });
  };

  handleSubmit = e => {
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
            onSearchQueryChange={this.searchData}
            filterOptions={filterOptions}
            filterValues={filterValues}
            onFilterChange={this.onFilterChange}
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
  children: PropTypes.func,
  data: PropTypes.array,
  engine: PropTypes.object,
  filterOptions: PropTypes.object
};

export default ProjectSearch;
