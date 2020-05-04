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
import product from '../images/categories/New_Relic_One_Catalog_Project.png';
import archived from '../images/categories/Archived.png';

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

const headers = [community, nr1catalog, example, experimental, product, archived]

const OssCategoryPage = ({ data }) => {
  const categories = get(data, 'allOssCategory.nodes', false);

  const categoryNavList = categories.filter(cat => cat.slug !== 'tbd').map(cat => {
    return (
      <>
        <h3>{cat.title}</h3>
      </>
    );
  });

  const categoryList = categories.filter(cat => cat.slug !== 'tbd').map((cat, index) => {
    return (
      <>
        {headers[index] && <img src={headers[index]} style={{ width: '100%', marginTop: '30px' }}/>}
        <h1>{cat.title}</h1>
        <p>{cat.description}</p>
        {cat.requirements && <><h3>Requirements</h3>
        <ul>
          {cat.requirements.map(req => <li>{req}</li>)}
        </ul></>}
      </>
    );
  });

  return (
    <Layout hasHeaderBg>
      <SEO title="A single oss category page" />
      <PageHeading
        title="New Relic Open Source Categories"
        subheader="Every public repository in the New Relic and New Relic Experimental GitHub organizations leverages one of the following categories"
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
