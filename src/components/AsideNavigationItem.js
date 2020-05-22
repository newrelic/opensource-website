import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import useDarkMode from 'use-dark-mode';

import styles from './AsideNavigationItem.module.scss';
import chevronIcon from '../images/icon-chevron-right.svg';
import avatarPlaceholder from '../images/avatar-placeholder.png';
import avatarPlaceholderLight from '../images/avatar-placeholder-light.png';

const AsideNavigationItem = ({ icon, label, subLabel, to }) => {
  const local = typeof window !== `undefined` ? window.localStorage : null;
  const darkModeStatus = local && local.getItem('darkMode');

  const darkMode = useDarkMode(darkModeStatus);

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
  to: PropTypes.string
};

export default AsideNavigationItem;
