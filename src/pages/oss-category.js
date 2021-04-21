import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import { css } from '@emotion/react';
import marked from 'marked';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import community from '../images/categories/Community_Project.png';
import community_plus from '../images/categories/Community_Plus.png';
import nr1catalog from '../images/categories/New_Relic_One_Catalog_Project.png';
import example from '../images/categories/Example_Code.png';
import experimental from '../images/categories/Experimental.png';
import archived from '../images/categories/Archived.png';
import * as styles from './oss-category.module.scss';

export const query = graphql`
  query OssCategory {
    allOssCategory {
      nodes {
        id
        slug
        title
        description
        requirements
      }
    }
  }
`;

const headers = [
  community,
  community_plus,
  nr1catalog,
  example,
  experimental,
  archived,
];

marked.setOptions({ gfm: true });

const OssCategoryPage = ({ data, pageContext }) => {
  const categories = get(data, 'allOssCategory.nodes', []);

  const categoryNavList = categories
    .filter((cat) => cat.slug !== 'tbd')
    .map((cat) => {
      return (
        <li key={cat.slug} className={styles.categorySidebarItem}>
          <a href={`./#${cat.slug}`} className={styles.categorySidebarItemLink}>
            {cat.title}
          </a>
        </li>
      );
    });

  const categoryList = categories
    .filter((cat) => cat.slug !== 'tbd')
    .map((cat, index) => {
      return (
        <React.Fragment key={cat.slug}>
          <h2 className={styles.categoryTitle} id={cat.slug}>
            {cat.title}
          </h2>
          <p>{cat.description}</p>
          {headers[index] && (
            <img className={styles.categoryImage} src={headers[index]} />
          )}
          {cat.requirements && (
            <>
              <h3>Requirements</h3>
              <ul>
                {cat.requirements.map((req, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: marked(req) }}
                  />
                ))}
              </ul>
            </>
          )}
        </React.Fragment>
      );
    });

  return (
    <Layout editLink={pageContext.fileRelativePath}>
      <SEO title="New Relic Open Source Categories" />
      <PageHeading
        title="New Relic Open Source Categories"
        subheader="Every public repository in the New Relic and New Relic Experimental GitHub organizations leverages one of the following categories"
      />
      <div className="primary-content">
        <aside className="primary-content-aside">
          <div className={styles.categoriesNavigation}>
            <h4>Categories</h4>
            <ul
              css={css`
                margin-bottom: 1rem;
              `}
              className={styles.categorySidebarList}
            >
              {categoryNavList}
            </ul>
            <p>
              For the code snippets that appear in the project's README file,
              see{' '}
              <a href="https://github.com/newrelic/opensource-website/wiki/Open-Source-Category-Snippets">
                this documentation
              </a>
              .
            </p>
          </div>
        </aside>
        <main className="primary-content-main">{categoryList}</main>
      </div>
    </Layout>
  );
};

OssCategoryPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default OssCategoryPage;
