import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import * as styles from './collection.module.scss';

export const query = graphql`
  query CollectionProjects {
    allProjects(
      filter: {
        projectType: { ne: "external" }
        projectTags: { elemMatch: { slug: { eq: "agent" } } }
      }
    ) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }
  }
`;

const CollectionPage = ({ data, pageContext }) => {
  const allProjects = data.allProjects.edges.map((p) => p.node);

  return (
    <Layout
      fullWidth
      className={styles.collectionPage}
      editLink={pageContext.fileRelativePath}
    >
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading title="New Relic Agents" />
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Our Agents
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Explore the open source repositories for New Relic agent technology
          </p>
        </header>
        <div className={styles.collectionListing}>
          {allProjects.map((project) => {
            return (
              <SimpleProjectModule
                key={project.id}
                data={project}
                className={styles.project}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

CollectionPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default CollectionPage;
