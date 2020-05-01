import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';

export const query = graphql`
  query OssCategory {
    allOssCategory {
      nodes {
        id
        slug
        title
        description
      }
    }
  }
`;

const OssCategoryPage = ({ data }) => {
  const categories = get(data, 'allOssCategory.nodes', false);

  const categoryNavList = categories.map(cat => {
    return (
      <>
        <h3>{cat.title}</h3>
      </>
    );
  });

  const categoryList = categories.map(cat => {
    return (
      <>
        <h1>{cat.title}</h1>
        <p>{cat.description}</p>
      </>
    );
  });

  return (
    <Layout hasHeaderBg>
      <SEO title="A single oss category page" />
      <PageHeading
        title="New Relic Open Source Categories"
        subheader="Every public repository in the newrelic and newrelic-experimental GitHub organizations must leverage one of the following categories"
        hasSeparator
      />
      <div className="primary-content">
        <aside className="primary-content-aside">
          <h2>Categories</h2>
          {categoryNavList}
        </aside>
        <main className="primary-content-main">{categoryList}</main>
      </div>
    </Layout>
  );
};

OssCategoryPage.propTypes = {
  data: PropTypes.object
};

export default OssCategoryPage;
