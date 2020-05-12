import React from 'react';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectModule from '../components/ProjectModule';

import styles from './external-projects.module.scss';

export const query = graphql`
  query ExternalProjectsQuery {
    topProjects: allProjects(
      filter: {projectType: {eq: "external"}}
    ) {
      edges {
        node {
          ...projectFields
        }
      }
    }
    openTelemetry: allProjects(
      filter: { slug: { eq: "open-telemetry" }, projectType: { eq: "external" } }
    ) {
      nodes {
        ...projectFields
      }
    }
    w3cTraceContext: allProjects(
      filter: { slug: { eq: "w3c-trace-context" }, projectType: { eq: "external" } }
    ) {
      nodes {
        ...projectFields
      }
    }
    adoptOpenJdk: allProjects(
      filter: { slug: { eq: "adopt-open-jdk" }, projectType: { eq: "external" } }
    ) {
      nodes {
        ...projectFields
      }
    }
  }
`;
const ExternalProjects = ({ data }) => {
  const externalProjects = [
    get(data, 'openTelemetry.nodes[0]'),
    get(data, 'w3cTraceContext.nodes[0]'),
    get(data, 'adoptOpenJdk.nodes[0]')
  ];

  return (
    <Layout fullWidth>
      <SEO title="Open source projects that New Relic contributes to" />
      <PageHeading
        title="Projects we love"
        subheader="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
      />
      <div className={styles.featuredProjects}>
        {externalProjects.map(project => (
          <ProjectModule data={project} key={project.title} />
        ))}
      </div>
      <div className="primary-content">
        <main className={styles.moreProjects}>
          <div className={styles.moreProjectsHeaderSection}>
            <h4 className={styles.moreProjectsHeaderSectionTitle}>
              More projects
            </h4>
            <Link className={styles.moreProjectsMoreLink}>View all</Link>
          </div>

          <div className={styles.projectListItem}>
            <img
              className={styles.projectListingItemImage}
              src="http://placehold.jp/150x150.png"
            />
            <div className={styles.projectListingItemCopy}>
              <h5 className={styles.projectListingItemName}>
                Magna ullamco amet
              </h5>
              <p className={styles.projectListingItemDescription}>
                Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Maecenas faucibus
                mollis interdum.
              </p>
            </div>
          </div>
          <div className={styles.projectListItem}>
            <img
              className={styles.projectListingItemImage}
              src="http://placehold.jp/150x150.png"
            />
            <div className={styles.projectListingItemCopy}>
              <h5 className={styles.projectListingItemName}>
                Magna ullamco amet
              </h5>
              <p className={styles.projectListingItemDescription}>
                Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Maecenas faucibus
                mollis interdum.
              </p>
            </div>
          </div>
          <div className={styles.projectListItem}>
            <img
              className={styles.projectListingItemImage}
              src="http://placehold.jp/150x150.png"
            />
            <div className={styles.projectListingItemCopy}>
              <h5 className={styles.projectListingItemName}>
                Magna ullamco amet
              </h5>
              <p className={styles.projectListingItemDescription}>
                Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Maecenas faucibus
                mollis interdum.
              </p>
            </div>
          </div>

          <button
            className={`button button-tertiary ${styles.viewMoreProjectsButton}`}
            type="button"
          >
            View all projects
          </button>
        </main>
      </div>
    </Layout>
  );
};

export default ExternalProjects;
