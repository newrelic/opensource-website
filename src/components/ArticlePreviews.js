import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './ArticlePreviews.module.scss';

const ArticlePreviews = ({ articles, size, hero }) => {
  return (
    <div
      className={`${styles.articlePreviews} ${
        size === 'small' ? styles.smallArticlePreviews : ''
      } ${hero ? styles.hero : ''}`}
    >
      {articles.map(article => {
        return (
          <Link className={styles.articlePreview} to="/blog-post" key={article.title}>
            <img
              className={styles.articlePreviewFeaturedImage}
              src={article.featuredImage}
              alt="featured image for this articles"
            />
            <div className={styles.articlePreviewPrimaryContent}>
              <h4 className={styles.articlePreviewTitle}>{article.title}</h4>
              <p className={styles.articlePreviewSnippet}>{article.snippet}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
ArticlePreviews.propTypes = {
  articles: PropTypes.array,
  size: PropTypes.string,
  hero: PropTypes.bool
};
/* eslint-enable */

export default ArticlePreviews;
