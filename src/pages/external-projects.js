import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectModule from '../components/ProjectModule';

import styles from './external-projects.module.scss';

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
    w3cTraceContext: allProjects(
      filter: {
        slug: { eq: "w3c-trace-context" }
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
        fields {
          contentEditLink
        }
        componentPath
        path
      }
    }
  }
`;
const ExternalProjects = ({ data }) => {
  const openTelemetry = get(data, 'openTelemetry.nodes[0]');
  const w3cTraceContext = get(data, 'w3cTraceContext.nodes[0]');
  const adoptOpenJdk = get(data, 'adoptOpenJdk.nodes[0]');
  const externalProjects = [openTelemetry, w3cTraceContext, adoptOpenJdk];
  const otherProjectsData = get(data, 'otherProjects.edges', []).map(
    i => i.node
  );
  const otherProjects = otherProjectsData.filter(project => {
    if (
      project.fullName === openTelemetry.fullName ||
      project.fullName === w3cTraceContext.fullName ||
      project.fullName === adoptOpenJdk.fullName
    ) {
      return false;
    }
    return true;
  });
  // console.log(otherProjects);
  return (
    <Layout fullWidth editLink={get(data, 'sitePage.nodes[0].fields.contentEditLink')}>
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading
        title="Projects we support"
        subheader="Delivering a more perfect Internet means developing more open source solutions together."
      />
      <div className={styles.featuredProjects}>
        {externalProjects.map(project => (
          <ProjectModule data={project} key={project.title} />
        ))}
      </div>
      {otherProjects && otherProjects.length > 0 && (
        <div className={`primary-content, ${styles.primaryContent}`}>
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
                  <div className={styles.projectListItem}>
                    <img
                      className={styles.projectListingItemImage}
                      src="http://placehold.jp/150x150.png"
                    />
                    <div className={styles.projectListingItemCopy}>
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
              <button
                className={`button button-tertiary ${styles.viewMoreProjectsButton}`}
                type="button"
              >
                View all projects
              </button>
            )}
          </main>
        </div>
      )}
    </Layout>
  );
};

ExternalProjects.propTypes = {
  data: PropTypes.object
};

export default ExternalProjects;
