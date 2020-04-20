import React from "react";
import PropTypes from "prop-types";

import styles from './PageHeading.module.scss'

const PageHeading = props => {
  const renderTags = () => {
    const tags = props.tags.map(tag => {
      return <li className={styles.pageHeadingTagListTag}>{tag}</li>;
    });

    return <ul className={styles.pageHeadingTagList}>{tags}</ul>;
  };

  return (
    <div className={`${styles.pageHeadingContainer} ${props.hasSeparator ? styles.hasSeparator : ''}`}>
      {props.icon ? (
        <div className={styles.pageHeadingIconContainer}>
          <img
            className={styles.pageHeadingIcon}
            alt="page heading icon"
            src={props.icon}
          />
        </div>
      ) : (
        ""
      )}
      {props.title ? <h1 className={styles.pageTitle}>{props.title}</h1> : ""}
      {props.subheader ? (
        <p className={styles.pageSubheader}>{props.subheader}</p>
      ) : (
        ""
      )}
      {props.tags ? renderTags() : ""}
    </div>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  icon: PropTypes.string,
  tags: PropTypes.array,
  hasSeparator: PropTypes.bool
};

export default PageHeading;
