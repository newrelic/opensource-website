import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import * as styles from './collection.module.scss';

export const query = graphql`
  query InstrumentationProjects($path: String) {
    allProjects(
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
          ...projectFields
        }
      }
    }
    sitePage: allSitePage(filter: { path: { eq: $path } }) {
      nodes {
        componentPath
        path
      }
    }
  }
`;

const InstrumentationPage = ({ data, pageContext }) => {
  // console.debug(data);
  const allProjects = data.allProjects.edges.map((project) => {
    const p = project.node;

    p.title = p.title.replace(/New Relic/, '');
    return p;
  });

  const exporters = allProjects.filter((p) =>
    p.projectTags.find((t) => t.slug === 'exporter')
  );
  const nris = allProjects.filter((p) =>
    p.projectTags.find((t) => t.slug === 'nri')
  );
  const sdks = allProjects.filter((p) =>
    p.projectTags.find((t) => t.slug === 'sdk')
  );
  const clis = allProjects.filter((p) =>
    p.projectTags.find((t) => t.slug === 'cli')
  );
  const agents = allProjects.filter((p) =>
    p.projectTags.find((t) => t.slug === 'agent')
  );
  // const opentelemetry = allProjects.filter(p => p.projectTags.find(t => t.slug === 'opentelemetry'));

  return (
    <Layout
      fullWidth
      className={styles.collectionPage}
      editLink={pageContext.fileRelativePath}
    >
      <SEO title="New Relic Open Source Instrumentation" />
      <PageHeading
        title="New Relic Open Source Instrumentation"
        subheader="Instrument everything, capture complete telemetry, and understand your digital systems better
        with our open source instrumentation."
      />
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Agents
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Easily send your telemetry data to New Relic One with our automated
            instrumentation
          </p>
        </header>
        <div className={styles.collectionListing}>
          {agents.map((project) => {
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
            Send data from popular sources of telemetry to New Relic One
          </p>
        </header>
        <div className={styles.collectionListing}>
          {exporters.map((project) => {
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
            Infrastructure Integrations
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Extend New Relic's Infrastructure instrumentation across your
            digital ecosystem
          </p>
        </header>
        <div className={styles.collectionListing}>
          {nris.map((project) => {
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
          <h4 className={styles.collectionListingHeaderSectionHeading}>SDKs</h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Quickly and easily build custom instrumentation into your software
          </p>
        </header>
        <div className={styles.collectionListing}>
          {sdks.map((project) => {
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
          <h4 className={styles.collectionListingHeaderSectionHeading}>CLIs</h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Add New Relic to your automated workflows
          </p>
        </header>
        <div className={styles.collectionListing}>
          {clis.map((project) => {
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
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default InstrumentationPage;
