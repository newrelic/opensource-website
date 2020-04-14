import React from "react";
import PropTypes from "prop-types";

const PageHeading = props => {
  const renderTags = () => {
    const tags = props.tags.map(tag => {
      return <li className="page-heading-tag-list-tag">{tag}</li>;
    });

    return <ul className="page-heading-tag-list">{tags}</ul>;
  };

  return (
    <div className="page-heading-container">
      {props.icon ? (
        <div className="page-heading-icon-container">
          <img
            className="page-heading-icon"
            alt="page heading icon"
            src={props.icon}
          />
        </div>
      ) : (
        ""
      )}
      {props.title ? <h1 className="page-title">{props.title}</h1> : ""}
      {props.subheader ? (
        <p className="page-subheader">{props.subheader}</p>
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
  tags: PropTypes.array
};

export default PageHeading;
