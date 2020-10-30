import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ pageContext }) => (
  <Layout editLink={pageContext.fileRelativePath}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

NotFoundPage.propTypes = {
  pageContext: PropTypes.object,
};

export default NotFoundPage;
