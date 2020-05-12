import React from 'react';
import PropTypes from 'prop-types';

import styles from './AsideNavigationItem.module.scss';
import chevronIcon from '../images/icon-chevron-right.svg';

const AsideNavigationItem = ({ icon, label, to }) => {
  return (
    <a href={to} className={styles.itemContainer}>
      <img src={icon} className={styles.itemIcon} alt="icon for Project Name" />
      <span className={styles.itemName}>{label}</span>
      <img
        className={styles.itemChevron}
        src={chevronIcon}
        alt="arrow pointing right"
      />
    </a>
  );
};

/* eslint-disable react/no-unused-prop-types */
AsideNavigationItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string
};
/* eslint-enable */

export default AsideNavigationItem;
