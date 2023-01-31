import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageHighlights from '../components/HomePageHighlights';
import HomePageInternalProjects from '../components/HomePageInternalProjects';
import HomepageCollection from '../components/HomepageCollection';
import * as styles from './home-page.module.scss';

export const query = graphql`
  query HomePageQuery($path: String) {
    topProjects: allProjects(filter: { projectType: { eq: "newrelic" } }) {
      edges {
        node {
          ...projectFields
        }
      }
    }
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
          ...projectFields
        }
      }
    }
    pixie: allProjects(
      filter: { slug: { eq: "pixie" }, projectType: { eq: "external" } }
    ) {
      nodes {
        ...projectFields
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
        component
        path
      }
    }
  }
`;

function sortByStats(a, b) {
  if (a.stats === null && b.stats === null) {
    return 0;
  } else if (a.stats === null) {
    return 1;
  } else if (b.stats === null) {
    return -1;
  }

  return a.stats.lastSixMonthsCommitTotal < b.stats.lastSixMonthsCommitTotal
    ? 1
    : -1;
}

const HomePage = ({ data, pageContext }) => {
  const instrumentationProjects = get(data, 'instrumentation.edges', [])
    .map((i) => i.node)
    .sort(sortByStats)
    .slice(0, 5);

  const externalProjects = [
    get(data, 'pixie.nodes[0]'),
    get(data, 'openTelemetry.nodes[0]'),
    get(data, 'w3cDistributedTracingWg.nodes[0]'),
    get(data, 'adoptOpenJdk.nodes[0]'),
  ].filter((i) => i !== undefined);

  // temp workaround until the query above is fixed to pull back the correct top 8
  const internalProjects = get(data, 'topProjects.edges', [])
    .map((i) => i.node)
    .sort(sortByStats)
    .slice(0, 8);

  return (
    <Layout fullWidth editLink={pageContext.fileRelativePath}>
      <SEO title="Home" />
      <div className={styles.heroContainer}>
        <div className={styles.homepageHeroCopy}>
          <h2
            data-testid="homepageHeroHeading"
            css={css`
              font-size: 40px;
              line-height: 110%;
              font-weight: 600;
              color: var(--color-neutrals-900);
            `}
          >
            Open standards.
            <br /> Open instrumentation.
            <br /> Open collaboration.
          </h2>
          <p className={styles.homepageHeroBodyCopy}>
            We{' '}
            <a
              href="https://github.com/newrelic/opensource-website"
              target="__blank"
              rel="noopener noreferrer"
            >
              built
            </a>{' '}
            this site to make it easy for <em>you</em> to explore the{' '}
            <a href="/explore-projects">open source projects</a> we maintain and
            the <a href="/external-projects">open standards projects</a> we
            participate in. To install one of our open-source agents or to get
            started with one of our integrations, see the{' '}
            <a
              href="https://docs.newrelic.com/docs/new-relic-solutions/get-started/quick-launch-guide/"
              target="__blank"
              rel="noopener noreferrer"
            >
              Quick launch guide
            </a>{' '}
            on the New Relic docs site.
          </p>
        </div>
      </div>

      <HomepageCollection projects={instrumentationProjects} />

      <HomePageHighlights data={externalProjects} />

      <div className={styles.featuredInternalProjectsContainer}>
        <div className={styles.featuredInternalProjectsSection}>
          <h3 className={styles.featuredInternalProjectsSectionTitle}>
            Explore our projects
          </h3>
          <p className={styles.featuredInternalProjectsSectionDescription}>
            Check out some of the products that we’re developing in open source
            or <Link to="/explore-projects">view all projects</Link>.
          </p>
        </div>
        <HomePageInternalProjects data={internalProjects} />
      </div>
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default HomePage;
