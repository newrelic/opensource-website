import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../images/icon-search.svg';
import styles from './ProjectSearchInput.module.scss';

const ProjectSearchInput = ({ value, onChange, filterOptions }) => {
  const { allLanguages, allCategories, allProjectTypes } = filterOptions;

  return (
    <div className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search for a project"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.searchFilters}>
        <select className={styles.searchFilter}>
          <option label="All Categories" value="" selected />
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
        <select className={styles.searchFilter}>
          <option label="All Project Types" value="" selected />
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
        <select className={styles.searchFilter}>
          <option label="All Language Types" value="" selected />
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
        <select className={styles.searchFilter}>
          <option label="Sort by" value="" selected />
        </select>
      </div>
    </div>
  );
};

ProjectSearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  filterOptions: PropTypes.object
};
export default ProjectSearchInput;
