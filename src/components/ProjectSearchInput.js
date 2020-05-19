import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Filter } from 'react-feather';

import searchIcon from '../images/icon-search.svg';
import styles from './ProjectSearchInput.module.scss';

const ProjectSearchInput = ({
  searchQueryValue,
  onSearchQueryChange,
  filterOptions,
  filterValues,
  onFilterChange
}) => {
  const { allLanguages, allCategories, allProjectTags } = filterOptions;
  const [mobileFiltersHidden, setMobileFiltersHidden] = useState(true);

  const onCategoryChange = e =>
    onFilterChange({ field: 'ossCategory', value: e.target.value });

  const onProjectTagChange = e =>
    onFilterChange({ field: 'projectTag', value: e.target.value });

  const onLanguageTypeChange = e =>
    onFilterChange({ field: 'languageType', value: e.target.value });

  return (
    <div className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
        <input
          type="text"
          value={searchQueryValue}
          onChange={e => {
            onSearchQueryChange({ searchQuery: e.target.value });
          }}
          placeholder="Search for a project"
          className={styles.searchInput}
        />
      </div>
      <div
        className={`${styles.searchFilters} ${
          mobileFiltersHidden ? styles.mobileFiltersHidden : ''
        }`}
      >
        <span
          className={styles.showFiltersButton}
          onClick={() => setMobileFiltersHidden(false)}
        >
          Show filters
          <Filter color="#007e8a" size={12} />
        </span>
        <select
          className={styles.searchFilter}
          onChange={onCategoryChange}
          value={filterValues.ossCategory}
        >
          <option label="All Categories" value="" />
          {allCategories.options.map(c => {
            return (
              <option
                key={c.fieldValue}
                label={c.fieldValue}
                value={c.fieldValue}
              />
            );
          })}
        </select>
        <select
          className={styles.searchFilter}
          onChange={onProjectTagChange}
          value={filterValues.projectTag}
        >
          <option label="All Project Tags" value="" />
          {allProjectTags.options.map(c => {
            return (
              <option
                key={c.fieldValue}
                label={c.fieldValue}
                value={c.fieldValue}
              />
            );
          })}
        </select>
        <select
          className={styles.searchFilter}
          onChange={onLanguageTypeChange}
          value={filterValues.languageType}
        >
          <option label="All Language Types" value="" />
          {allLanguages.options.map(c => {
            return (
              <option
                key={c.fieldValue}
                label={c.fieldValue}
                value={c.fieldValue}
              />
            );
          })}
        </select>
      </div>
    </div>
  );
};

ProjectSearchInput.propTypes = {
  searchQueryValue: PropTypes.string,
  onSearchQueryChange: PropTypes.func,
  filterOptions: PropTypes.object,
  filterValues: PropTypes.object,
  onFilterChange: PropTypes.func
};
export default ProjectSearchInput;
