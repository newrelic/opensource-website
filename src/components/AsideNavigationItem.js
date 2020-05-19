import React from 'react';
import PropTypes from 'prop-types';

import styles from './AsideNavigationItem.module.scss';
import chevronIcon from '../images/icon-chevron-right.svg';

const AsideNavigationItem = ({ icon, label, subLabel, to }) => {
  return (
    <a
      href={to}
      target="__blank"
      className={`${styles.itemContainer} ${
        subLabel ? styles.hasSublabel : ''
      }`}
    >
      <img src={icon} className={styles.itemIcon} alt="icon for Project Name" />
      <div className={styles.itemCopy}>
        <span className={styles.itemName}>{label}</span>
        {subLabel && <span className={styles.itemSublabel}>{subLabel}</span>}
      </div>
      <img
        className={styles.itemChevron}
        src={chevronIcon}
        alt="arrow pointing right"
      />
    </a>
  );
};

AsideNavigationItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  subLabel: PropTypes.string,
  to: PropTypes.string
};

export default AsideNavigationItem;
