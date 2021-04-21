import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectModule from '../components/ProjectModule';
import { Button } from '@newrelic/gatsby-theme-newrelic';

import * as styles from './external-projects.module.scss';

export const query = graphql`
  query ExternalProjectsQuery($path: String) {
    otherProjects: allProjects(
      filter: { projectType: { eq: "external" }, isParentProject: { eq: true } }
    ) {
      edges {
        node {
          ...projectFields
        }
      }
    }
    openTelemetry: allProjects(
      filter: {
        slug: { eq: "open-telemetry" }
        projectType: { eq: "external" }
      }
    ) {
      nodes {
        ...projectFields
      }
    }
    w3cDistributedTracingWg: allProjects(
      filter: {
        slug: { eq: "w3c-distributed-tracing-wg" }
        projectType: { eq: "external" }
      }
    ) {
      nodes {
        ...projectFields
      }
    }
    adoptOpenJdk: allProjects(
      filter: {
        slug: { eq: "adopt-open-jdk" }
        projectType: { eq: "external" }
      }
    ) {
      nodes {
        ...projectFields
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

const ExternalProjectsPage = ({ data, pageContext }) => {
  const openTelemetry = get(data, 'openTelemetry.nodes[0]');
  const w3cDistributedTracingWg = get(data, 'w3cDistributedTracingWg.nodes[0]');
  const adoptOpenJdk = get(data, 'adoptOpenJdk.nodes[0]');
  const externalProjects = [
    openTelemetry,
    w3cDistributedTracingWg,
    adoptOpenJdk,
  ];
  const otherProjectsData = get(data, 'otherProjects.edges', []).map(
    (i) => i.node
  );
  const otherProjects = otherProjectsData.filter((project) => {
    if (
      project.fullName === openTelemetry.fullName ||
      project.fullName === w3cDistributedTracingWg.fullName ||
      project.fullName === adoptOpenJdk.fullName
    ) {
      return false;
    }
    return true;
  });

  return (
    <Layout fullWidth editLink={pageContext.fileRelativePath}>
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading
        title="Projects we support"
        subheader="Making it easier for everyone to instrument everything and build better software together."
      />
      <div className={styles.featuredProjects}>
        {externalProjects.map((project) => (
          <ProjectModule data={project} key={project.title} />
        ))}
      </div>
      {otherProjects && otherProjects.length > 0 && (
        <div className="primary-content">
          <main className={styles.moreProjects}>
            <div className={styles.moreProjectsHeaderSection}>
              <h4 className={styles.moreProjectsHeaderSectionTitle}>
                More projects
              </h4>
              {otherProjects.length > 5 && (
                <Link className={styles.moreProjectsMoreLink}>View all</Link>
              )}
            </div>
            {otherProjects.map((project, i) => {
              if (i < 5) {
                return (
                  <div
                    className={styles.projectListItem}
                    onClick={() => {
                      location.href = `/projects/${project.fullName}`;
                    }}
                  >
                    <img
                      className={styles.projectListingItemImage}
                      src="http://placehold.jp/150x150.png"
                    />
                    <div>
                      <h5 className={styles.projectListingItemName}>
                        {project.title}
                      </h5>
                      <p className={styles.projectListingItemDescription}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
            {otherProjects.length > 5 && (
              <Button
                variant={Button.VARIANT.NORMAL}
                className={styles.viewMoreProjectsButton}
                type="button"
              >
                View all projects
              </Button>
            )}
          </main>
        </div>
      )}
    </Layout>
  );
};

ExternalProjectsPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default ExternalProjectsPage;
