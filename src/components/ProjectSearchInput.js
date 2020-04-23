import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../images/icon-search.svg';
import styles from './ProjectSearchInput.module.scss';

const ProjectSearchInput = ({ value, onChange }) => {
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
        </select>
        <select className={styles.searchFilter}>
          <option label="All Project Types" value="" selected />
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
  onChange: PropTypes.func
};
export default ProjectSearchInput;
