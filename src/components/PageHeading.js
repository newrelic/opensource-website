import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageHeading.module.scss';

const PageHeading = props => {
  const renderTags = () => {
    const tags = props.tags.map((tag, index) => {
      if (tag.name !== 'version') {
        return (
          <li key={index} className={styles.pageHeadingTagListTag}>
            <a className={styles.tagLink} href={`/explore-projects/?${tag.name}=${tag.value}`}>{tag.value}</a>
          </li>
        );
      } else {
        return (
          <li key={index} className={styles.pageHeadingTagListTag}>
            {tag.value}
          </li>
        );
      }
    });

    return <ul className={styles.pageHeadingTagList}>{tags}</ul>;
  };

  return (
    <div
      className={`${styles.pageHeadingContainer} ${
        props.hasSeparator ? styles.hasSeparator : ''
      } ${props.blogMeta ? styles.blogPostHeader : ''} ${
        !props.icon && props.hasSeparator ? styles.hasSeparatorWithoutIcon : ''
      }`}
    >
      {props.icon ? (
        <div className={styles.pageHeadingIconContainer}>
          <img
            className={styles.pageHeadingIcon}
            alt="page heading icon"
            src={props.icon}
          />
        </div>
      ) : (
        ''
      )}
      {props.title ? <h1 className={styles.pageTitle}>{props.title}</h1> : ''}
      {props.subheader ? (
        <p className={styles.pageSubheader}>{props.subheader}</p>
      ) : (
        ''
      )}
      {props.blogMeta && <p className={styles.blogMeta}>{props.blogMeta}</p>}
      {props.tags ? renderTags() : ''}
    </div>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  icon: PropTypes.string,
  tags: PropTypes.array,
  hasSeparator: PropTypes.bool,
  blogMeta: PropTypes.string
};

export default PageHeading;
