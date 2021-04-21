import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import Image from './Image';

import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import placeholderProjectIconLight from '../images/page-heading-icon-placeholder-light.png';

import * as styles from './PageHeading.module.scss';
import withDarkMode from './withDarkMode';

const PageHeading = (props) => {
  const { darkMode, project } = props;

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
            <a
              className={styles.tagLink}
              href={`${project.githubUrl}/releases`}
              target="__blank"
              rel="noopener noreferrer"
            >
              <span className={styles.tagName}>{startCase(tag.name)}</span>
              <span className={styles.tagValue}>{tag.value}</span>
            </a>
          </li>
        );
      } else {
        return null;
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
      } ${props.icon ? styles.hasIcon : ''} 
      ${props.className ? props.className : ''}`}
    >
      {hasIcon && props.showIcon && (
        <div>
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
  showIcon: false,
};

PageHeading.propTypes = {
  project: PropTypes.object,
  title: PropTypes.string,
  subheader: PropTypes.string,
  icon: PropTypes.string,
  showIcon: PropTypes.bool,
  tags: PropTypes.array,
  hasSeparator: PropTypes.bool,
  blogMeta: PropTypes.string,
  callToAction: PropTypes.func,
  darkMode: PropTypes.object,
  className: PropTypes.string,
};

export default withDarkMode(PageHeading);
