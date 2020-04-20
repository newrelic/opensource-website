
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const HomePageRecentArticles = (articles) => {
  
  return (
    <div className="recent-articles">
      {articles.articles.map(article => {
        return (
          <Link className="recent-article" to="/" key={article.title}>
            <img className="recent-article-featured-image" src={article.featuredImage} alt={`featured image for this articles`}/>
            <div className="recent-article-primary-content">
              <h4 className="recent-article-title">{article.title}</h4>
              <p className="recent-article-snippet">{article.snippet}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

HomePageRecentArticles.propTypes = {
  articles: PropTypes.array
}

export default HomePageRecentArticles