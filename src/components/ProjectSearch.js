import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as JsSearch from 'js-search';

import ProjectSearchInput from './ProjectSearchInput';

class ProjectSearch extends Component {
  state = {
    searchResults: [],
    search: null,
    indexByTitle: false,
    indexByAuthor: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: '',
    selectedStrategy: '',
    selectedSanitizer: ''
  };

  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps;
      return {
        indexFields: engine.indexFields,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
        removeStopWords: engine.removeStopWords,
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
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { searchResults, searchQuery } = this.state;
    const { data, filterOptions, children } = this.props;
    const queryResults = searchQuery === '' ? data : searchResults;
    return (
      <div>
        <div style={{ margin: '0 auto' }}>
          <form onSubmit={this.handleSubmit}>
            <ProjectSearchInput
              value={searchQuery}
              onChange={this.searchData}
              filterOptions={filterOptions}
            />
          </form>
          <div>{children({ projects: queryResults })}</div>
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
