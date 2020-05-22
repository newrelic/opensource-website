import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import Image from './Image';
import useDarkMode from 'use-dark-mode';

import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import placeholderProjectIconLight from '../images/page-heading-icon-placeholder-light.png';

import styles from './PageHeading.module.scss';

const PageHeading = props => {
  const darkModeStatus = localStorage.getItem('darkMode');
  const darkMode = useDarkMode(darkModeStatus);
  const renderTags = () => {
    const tags = props.tags.map((tag, index) => {
      if (tag.name !== 'version') {
        return (
          <li key={index} className={styles.pageHeadingTagListTag}>
            <a
              className={styles.tagLink}
              href={`/explore-projects/?${tag.name}=${tag.value}`}
            >
              <span className={styles.tagName}>{startCase(tag.name)}</span>
              <span className={styles.tagValue}>{tag.value}</span>
            </a>
          </li>
        );
      } else if (tag.value && tag.value.trim().length > 0) {
        return (
          <li
            key={index}
            className={`${styles.pageHeadingTagListTag} ${styles.tagWithNoLink}`}
          >
            <span className={styles.tagName}>{startCase(tag.name)}</span>
            <span className={styles.tagValue}>{tag.value}</span>
          </li>
        );
      }
    });

    return <ul className={styles.pageHeadingTagList}>{tags}</ul>;
  };

  const hasIcon = () => {
    if (props.icon) {
      return true;
    } else if (props.icon === null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className={`${styles.pageHeadingContainer} ${
        props.hasSeparator ? styles.hasSeparator : ''
      } ${props.blogMeta ? styles.blogPostHeader : ''} ${
        !hasIcon && props.hasSeparator ? styles.hasSeparatorWithoutIcon : ''
      } ${props.icon ? styles.hasIcon : ''} ${
        props.callToAction ? styles.hasCallToAction : ''
      }`}
    >
      {hasIcon && props.showIcon && (
        <div className={styles.pageHeadingIconContainer}>
          <Image
            src={props.icon}
            fallbackSrc={
              darkMode.value
                ? placeholderProjectIconLight
                : placeholderProjectIcon
            }
            alt={`Icon for ${props.title}`}
            className={styles.pageHeadingIcon}
          />
        </div>
      )}
      {props.title ? <h1 className={styles.pageTitle}>{props.title}</h1> : ''}
      {props.subheader ? (
        <p className={styles.pageSubheader}>{props.subheader}</p>
      ) : (
        ''
      )}
      {props.blogMeta && <p className={styles.blogMeta}>{props.blogMeta}</p>}
      {props.tags ? renderTags() : ''}
      {props.callToAction && props.callToAction()}
    </div>
  );
};

PageHeading.defaultProps = {
  showIcon: false
}

PageHeading.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  icon: PropTypes.string,
  showIcon: PropTypes.bool,
  tags: PropTypes.array,
  hasSeparator: PropTypes.bool,
  blogMeta: PropTypes.string,
  callToAction: PropTypes.func
};

export default PageHeading;
