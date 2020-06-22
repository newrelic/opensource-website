import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import community from '../images/categories/Community_Project.png';
import nr1catalog from '../images/categories/New_Relic_One_Catalog_Project.png';
import example from '../images/categories/Example_Code.png';
import experimental from '../images/categories/Experimental.png';
import product from '../images/categories/Product_Delivered_in_Open_Source.png';
import archived from '../images/categories/Archived.png';
import styles from './oss-category.module.scss';

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
  nr1catalog,
  example,
  experimental,
  product,
  archived
];

const OssCategoryPage = ({ data }) => {
  const categories = get(data, 'allOssCategory.nodes', []);

  const categoryNavList = categories
    .filter(cat => cat.slug !== 'tbd')
    .map(cat => {
      return (
        <li key={cat.slug} className={styles.categorySidebarItem}>
          <a href={`#${cat.slug}`} className={styles.categorySidebarItemLink}>
            {cat.title}
          </a>
        </li>
      );
    });

  const categoryList = categories
    .filter(cat => cat.slug !== 'tbd')
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
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </>
          )}
        </React.Fragment>
      );
    });

  return (
    <Layout>
      <SEO title="New Relic Open Source Categories" />
      <PageHeading
        title="New Relic Open Source Categories"
        subheader="Every public repository in the New Relic and New Relic Experimental GitHub organizations leverages one of the following categories"
      />
      <div className="primary-content">
        <aside className={`primary-content-aside ${styles.aside}`}>
          <div className={styles.categoriesNavigation}>
            <h4>Categories</h4>
            <ul className={styles.categorySidebarList}>{categoryNavList}</ul>
          </div>
        </aside>
        <main className="primary-content-main">
          <p>
            For the code snippets that appear in the project's README file, see{' '}
            <a href="https://github.com/newrelic/opensource-website/wiki/Open-Source-Category-Snippets">
              this documentation
            </a>
            .
          </p>
          {categoryList}
        </main>
      </div>
    </Layout>
  );
};

OssCategoryPage.propTypes = {
  data: PropTypes.object
};

export default OssCategoryPage;
