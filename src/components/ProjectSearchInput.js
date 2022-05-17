import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Filter } from 'react-feather';
import { Dropdown, Button, SearchInput } from '@newrelic/gatsby-theme-newrelic';

import * as styles from './ProjectSearchInput.module.scss';

const ProjectSearchInput = ({
  searchQueryValue,
  onSearchQueryChange,
  filterOptions,
  filterValues,
  onFilterChange,
}) => {
  const { allLanguages, allCategories, allProjectTags } = filterOptions;
  const [mobileFiltersHidden, setMobileFiltersHidden] = useState(true);

  const onCategoryChange = (e) => {
    onFilterChange({
      field: 'ossCategory',
      value: e.target.innerText === 'All Categories' ? '' : e.target.innerText,
    });
  };

  const onProjectTagChange = (e) =>
    onFilterChange({
      field: 'projectTag',
      value:
        e.target.innerText === 'All Project Tags' ? '' : e.target.innerText,
    });

  const onLanguageTypeChange = (e) =>
    onFilterChange({
      field: 'languageType',
      value:
        e.target.innerText === 'All Language Types' ? '' : e.target.innerText,
    });

  return (
    <div className={styles.searchSection}>
      <SearchInput
        className={styles.searchInput}
        type="text"
        size={SearchInput.SIZE.LARGE}
        value={searchQueryValue}
        onChange={(e) => {
          onSearchQueryChange({ searchQuery: e.target.value });
        }}
        placeholder="Search for a project"
      />

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

        <Dropdown
          className={styles.searchFilter}
          value={filterValues.ossCategory}
        >
          <Dropdown.Toggle variant={Button.VARIANT.NORMAL}>
            {filterValues.ossCategory || 'All Categories'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.MenuItem onClick={onCategoryChange}>
              All Categories
            </Dropdown.MenuItem>
            {allCategories.options.map((c) => {
              return (
                <Dropdown.MenuItem
                  key={c.fieldValue}
                  onClick={onCategoryChange}
                >
                  {c.fieldValue}
                </Dropdown.MenuItem>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          className={styles.searchFilter}
          value={filterValues.projectTag}
        >
          <Dropdown.Toggle variant={Button.VARIANT.NORMAL}>
            {filterValues.projectTag || 'All Project Tags'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.MenuItem onClick={onProjectTagChange}>
              All Project Tags
            </Dropdown.MenuItem>
            {allProjectTags.options.map((c) => {
              return (
                <Dropdown.MenuItem
                  key={c.fieldValue}
                  onClick={onProjectTagChange}
                >
                  {c.fieldValue}
                </Dropdown.MenuItem>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          className={styles.searchFilter}
          value={filterValues.languageType}
        >
          <Dropdown.Toggle variant={Button.VARIANT.NORMAL}>
            {filterValues.languageType || 'All Language Types'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.MenuItem onClick={onLanguageTypeChange}>
              All Language Types
            </Dropdown.MenuItem>
            {allLanguages.options.map((c) => {
              return (
                <Dropdown.MenuItem
                  key={c.fieldValue}
                  onClick={onLanguageTypeChange}
                >
                  {c.fieldValue}
                </Dropdown.MenuItem>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

ProjectSearchInput.propTypes = {
  searchQueryValue: PropTypes.string,
  onSearchQueryChange: PropTypes.func,
  filterOptions: PropTypes.object,
  filterValues: PropTypes.object,
  onFilterChange: PropTypes.func,
};
export default ProjectSearchInput;
