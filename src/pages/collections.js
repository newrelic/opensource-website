import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';
import { startCase } from 'lodash';
import { ChevronRight } from 'react-feather';

import styles from './collection.module.scss';

export const query = graphql`
  query allCollections($path: String) {
    nerdpacks: allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        projectTags: { elemMatch: { slug: { eq: "nr1-app" } } }
      }
    ) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }

    layouts: allProjects(filter: { name: { regex: "/layout/" } }) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }
    sitePage: allSitePage(filter: { path: { eq: $path } }) {
      nodes {
        fields {
          contentEditLink
        }
        componentPath
        path
      }
    }
  }
`;

const CollectionPage = ({ data }) => {
  const allCollections = Object.entries(data);
  return (
    <Layout fullWidth className={`${styles.collectionPage} ${styles.collectionsPage}`}>
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading
        title="Highlighted projects"
        subheader="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
        className={styles.pageHeading}
      />
      {allCollections.map((collection, i) => {
        if (collection[0] !== 'sitePage') {
          return (
            <>
              <div className={styles.collectionListingContainer}>
                <header className={styles.collectionListingHeaderSection}>
                  <div>
                    <h4 className={styles.collectionListingHeaderSectionHeading}>
                      {startCase(collection[0])}
                    </h4>
                    <p className={styles.collectionListingHeaderSectionDescription}>
                      Explore the open source repositories for New Relic agent technology
                    </p>
                  </div>
                  <a href={collection[0]} className={styles.collectionsPageCollectionLink}>
                    View all <span className={styles.collectionProjectCount}>{collection[1].edges.length}</span> projects 
                    <ChevronRight />
                  </a>
                </header>
                <div className={styles.collectionListing}>
                  {collection[1].edges.map((project, i) => {
                    if (i < 4) {
                      return (
                        <SimpleProjectModule
                          key={project.node.id}
                          data={project.node}
                          className={styles.project}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </>
          );
        }
      })}
    </Layout>
  );
};

CollectionPage.propTypes = {
  data: PropTypes.object
};

export default CollectionPage;
