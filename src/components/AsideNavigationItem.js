import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

import styles from './AsideNavigationItem.module.scss';
import chevronIcon from '../images/icon-chevron-right.svg';
import avatarPlaceholder from '../images/avatar-placeholder.png';
import avatarPlaceholderLight from '../images/avatar-placeholder-light.png';
import withDarkMode from './withDarkMode';

const AsideNavigationItem = ({ icon, label, subLabel, to, darkMode }) => {
  return (
    <a
      href={to}
      target="__blank"
      className={`${styles.itemContainer} ${
        subLabel ? styles.hasSublabel : ''
      }`}
    >
      <Image
        src={icon}
        fallbackSrc={
          darkMode.value ? avatarPlaceholderLight : avatarPlaceholder
        }
        alt={`Icon for ${label}`}
        className={styles.itemIcon}
      />
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
  to: PropTypes.string,
  darkMode: PropTypes.object
};

export default withDarkMode(AsideNavigationItem);
