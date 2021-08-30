import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';
import { startCase } from 'lodash';
import { ChevronRight } from 'react-feather';

import * as styles from './collection.module.scss';

export const query = graphql`
  query allCollections($path: String) {
    instrumentation: allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        projectTags: {
          elemMatch: {
            slug: { in: ["exporter", "nri", "agent", "sdk", "cli"] }
          }
        }
      }
    ) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }

    nerdpacks: allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        projectTags: { elemMatch: { slug: { eq: "nr1-app" } } }
      } # sort: { fields: stats___lastSixMonthsCommitTotal, order: DESC }
    ) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }

    layouts: allProjects(
      filter: { name: { regex: "/layout/" } } # sort: { fields: stats___lastSixMonthsCommitTotal, order: DESC }
    ) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }

    sitePage: allSitePage(filter: { path: { eq: $path } }) {
      nodes {
        component
        path
      }
    }
  }
`;

function generateDescription(name) {
  switch (name) {
    case 'nerdpacks':
      return 'Explore the New Relic One Applications that are available in open source.';
    case 'layouts':
      return 'Build a better application beginning with a better starting point.';
    case 'instrumentation':
      return "Instrument everything with our open source agents, tools, and sdk's.";
  }
}

const CollectionPage = ({ data, pageContext }) => {
  const allData = Object.entries(data);
  const allCollections = allData
    .filter((c) => c[0] !== 'sitePage')
    .map((c) => {
      return {
        name: c[0],
        size: c[1].edges.length,
        projects: c[1].edges.filter((e, i) => i < 4).map((e) => e.node),
        description: generateDescription(c[0]),
      };
    });

  return (
    <Layout
      fullWidth
      className={`${styles.collectionPage} ${styles.collectionsPage}`}
      editLink={pageContext.fileRelativePath}
    >
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading
        title="Highlighted projects"
        subheader="Explore collections of unique solutions in telemetry acquisition and visualization."
        className={styles.pageHeading}
      />

      {allCollections.map((collection) => {
        return (
          <>
            <div className={styles.collectionListingContainer}>
              <header className={styles.collectionListingHeaderSection}>
                <div>
                  <h4 className={styles.collectionListingHeaderSectionHeading}>
                    {startCase(collection.name)}
                  </h4>
                  <p
                    className={styles.collectionListingHeaderSectionDescription}
                  >
                    {collection.description}
                  </p>
                </div>
                <a
                  href={`/${collection.name}`}
                  className={styles.collectionsPageCollectionLink}
                >
                  View all{' '}
                  <span className={styles.collectionProjectCount}>
                    {collection.size}
                  </span>{' '}
                  projects
                  <ChevronRight />
                </a>
              </header>
              <div className={styles.collectionListing}>
                {collection.projects.map((project) => (
                  <SimpleProjectModule
                    key={project.id}
                    data={project}
                    className={styles.project}
                  />
                ))}
              </div>
            </div>
          </>
        );
      })}
    </Layout>
  );
};

CollectionPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default CollectionPage;
