import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageHighlights from '../components/HomePageHighlights';
import HomePageInternalProjects from '../components/HomePageInternalProjects';
import HomepageCollection from '../components/HomepageCollection';
import * as styles from './home-page.module.scss';

import videoPlaceholder from '../images/video-placeholder-1.jpg';
import playButton from '../images/button-play.svg';
import closeIcon from '../images/icon-close.svg';

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
  const [heroVideoActive, setHeroVideoActive] = useState(false);

  const instrumentationProjects = get(data, 'instrumentation.edges', [])
    .map((i) => i.node)
    .sort(sortByStats)
    .slice(0, 5);

  const externalProjects = [
    get(data, 'openTelemetry.nodes[0]'),
    get(data, 'w3cDistributedTracingWg.nodes[0]'),
    get(data, 'adoptOpenJdk.nodes[0]'),
  ].filter((i) => i !== undefined);

  // temp workaround until the query above is fixed to pull back the correct top 8
  const internalProjects = get(data, 'topProjects.edges', [])
    .map((i) => i.node)
    .sort(sortByStats)
    .slice(0, 8);

  const renderHeroVideo = () => {
    return (
      <>
        <div className={styles.responsiveVideoContainer}>
          <div className={`responsive-video ${styles.responsiveVideo}`}>
            <iframe
              width="1000"
              height="562.704471"
              src="https://fast.wistia.net/embed/iframe/qc7gkrlltt?videoFoam=true"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; showinfo; modestbranding"
              placeholder=""
            />
          </div>
        </div>
        <div
          className={`${styles.homepageHeroVideo}`}
          style={{ backgroundImage: `url(${videoPlaceholder})` }}
          onClick={() => {
            setHeroVideoActive(true);
          }}
        >
          <img
            src={closeIcon}
            alt="close icon"
            className={styles.modalCloseButton}
            onClick={() => {
              setHeroVideoActive(false);
            }}
          />

          <img src={playButton} className={styles.playButton} />
          <div className={styles.iframeContainer}>
            <iframe
              width="1000"
              height="562.704471"
              src={`https://fast.wistia.net/embed/iframe/qc7gkrlltt?videoFoam=true${
                heroVideoActive ? `&autoplay=1` : ''
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; showinfo; modestbranding"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout fullWidth editLink={pageContext.fileRelativePath}>
      <Helmet>
        <html className={heroVideoActive && styles.heroVideoActive} />
      </Helmet>

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
            participate in. Learn{' '}
            <a
              href="https://blog.newrelic.com/product-news/announcing-new-relic-open-source/"
              target="__blank"
              rel="noopener noreferrer"
            >
              more
            </a>
            .
          </p>
        </div>
        {renderHeroVideo()}
      </div>
      <div
        className={styles.videoModalOverlay}
        onClick={() => {
          setHeroVideoActive(false);
        }}
      />

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
