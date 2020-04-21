import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './HomePageRecentArticles.module.scss';

const HomePageRecentArticles = articles => {
  return (
    <div className={styles.recentArticles}>
      {articles.articles.map(article => {
        return (
          <Link className={styles.recentArticle} to="/" key={article.title}>
            <img
              className={styles.recentArticleFeaturedImage}
              src={article.featuredImage}
              alt="featured image for this articles"
            />
            <div className={styles.recentArticlePrimaryContent}>
              <h4 className={styles.recentArticleTitle}>{article.title}</h4>
              <p className={styles.recentArticleSnippet}>{article.snippet}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

HomePageRecentArticles.propTypes = {
  articles: PropTypes.array
};

export default HomePageRecentArticles;
