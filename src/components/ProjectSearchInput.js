import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../images/icon-search.svg';
import styles from './ProjectSearchInput.module.scss';

const ProjectSearchInput = ({
  searchQueryValue,
  onSearchQueryChange,
  filterOptions,
  filterValues,
  onFilterChange
}) => {
  const { allLanguages, allCategories, allProjectTypes } = filterOptions;

  const onCategoryChange = e =>
    onFilterChange({ field: 'ossCategory', value: e.target.value });

  const onProjectTypeChange = e =>
    onFilterChange({ field: 'projectType', value: e.target.value });

  const onLanguageTypeChange = e =>
    onFilterChange({ field: 'languageType', value: e.target.value });

  return (
    <div className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
        <input
          type="text"
          value={searchQueryValue}
          onChange={onSearchQueryChange}
          placeholder="Search for a project"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.searchFilters}>
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
          onChange={onProjectTypeChange}
          value={filterValues.projectType}
        >
          <option label="All Project Types" value="" />
          {allProjectTypes.options.map(c => {
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
