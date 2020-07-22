import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import styles from './collection.module.scss';

export const query = graphql`
  query InstrumentationProjects($path: String) {
    allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        projectTags:
          { elemMatch: { slug: { in: ["exporter", "nri", "agent", "sdk", "cli" ] } }
        }
      }
    ) {
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

const InstrumentationPage = ({ data }) => {
  // console.debug(data);
  const allProjects = data.allProjects.edges.map(project => {
    const p = project.node;

    p.title = p.title.replace(/New Relic/, '');
    return p;
  });

  const exporters = allProjects.filter(p => p.projectTags.find(t => t.slug === 'exporter'));
  const nris = allProjects.filter(p => p.projectTags.find(t => t.slug === 'nri'));
  const sdks = allProjects.filter(p => p.projectTags.find(t => t.slug === 'sdk'));
  const clis = allProjects.filter(p => p.projectTags.find(t => t.slug === 'cli'));
  const agents = allProjects.filter(p => p.projectTags.find(t => t.slug === 'agent'));
  //const opentelemetry = allProjects.filter(p => p.projectTags.find(t => t.slug === 'opentelemetry'));

  return (
    <Layout
      fullWidth
      className={styles.collectionPage}
      editLink={get(data, 'sitePage.nodes[0].fields.contentEditLink')}
    >
      <SEO title="Open source New Relic One applications" />
      <PageHeading
        title="New Relic Open Source Instrumentation"
        subheader="Explore our agents, data exporters, SDK's, and instrumentation intregrations."
      />
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Agents
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Automated instrumentation projects for languages and technologies
          </p>
        </header>
        <div className={styles.collectionListing}>
          {agents.map(project => {
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
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            New Relic Infrastructure integrations
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Replace me with smart words.
          </p>
        </header>
        <div className={styles.collectionListing}>
          {nris.map(project => {
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
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Data Exporters
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Replace me with smart words.
          </p>
        </header>
        <div className={styles.collectionListing}>
          {exporters.map(project => {
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
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            SDK's
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Replace me with smart words.
          </p>
        </header>
        <div className={styles.collectionListing}>
          {sdks.map(project => {
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
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            CLI's
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Replace me with smart words.
          </p>
        </header>
        <div className={styles.collectionListing}>
          {clis.map(project => {
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

InstrumentationPage.propTypes = {
  data: PropTypes.object
};

export default InstrumentationPage;
