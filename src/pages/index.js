import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageHighlights from '../components/HomePageHighlights';
import HomePageInternalProjects from '../components/HomePageInternalProjects';
import styles from './home-page.module.scss';

import genericProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import videoPlaceholder from '../images/video-placeholder.jpg';
import playButton from '../images/button-play.svg';
import closeIcon from '../images/icon-close.svg';

export const query = graphql`
  query HomePageQuery {
    topProjects: allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        stats: { lastSixMonthsCommitTotal: { gt: 1 } }
      }
      sort: { fields: stats___lastSixMonthsCommitTotal, order: DESC }
      limit: 8
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
  }
`;

const IndexPage = ({ data }) => {
  const [heroVideoActive, setHeroVideoActive] = useState(false);

  const externalProjects = [
    get(data, 'openTelemetry.nodes[0]'),
    get(data, 'w3cTraceContext.nodes[0]'),
    get(data, 'adoptOpenJdk.nodes[0]')
  ];

  const internalProjects = get(data, 'topProjects.edges').map(i => i.node);
  internalProjects.forEach((p, index) => {
    internalProjects[index].iconUrl = genericProjectIcon;
  });

  return (
    <Layout fullWidth>
      <Helmet>
        <body className={heroVideoActive && styles.heroVideoActive} />
      </Helmet>

      <SEO title="Home" />
      <div className={styles.heroContainer}>
        <div className={styles.homepageHeroCopy}>
          <h2 className={styles.homepageHeroHeading}>
            The future of observability is open.
          </h2>
          <p className={styles.homepageHeroBodyCopy}>
            New Relic ❤️'s open source. We{' '}
            <a href="https://github.com/newrelic/opensource-website">built</a>{' '}
            this site to make it easy for <em>you</em> to{' '}
            <a href="/explore-projects">explore the projects</a> we're
            maintaining as well as our involvement in{' '}
            <a href="/external-projects">open standards</a>. Learn{' '}
            <a
              href="#"
              onClick={() => {
                alert('New Relic Blog post announcing this site');
              }}
            >
              more
            </a>
            .
          </p>
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
              className={styles.heroVideoIframe}
              width="1000"
              height="562.704471"
              src={`https://www.youtube-nocookie.com/embed/7wnav6Fu9T0?showinfo=0&modestbranding=1&rel=0&controls=0${
                heroVideoActive ? `&autoplay=1` : ''
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; showinfo; modestbranding"
            />
          </div>
        </div>
      </div>
      <div
        className={styles.videoModalOverlay}
        onClick={() => {
          setHeroVideoActive(false);
        }}
      />

      <HomePageHighlights data={externalProjects} />

      <div className={styles.featuredInternalProjectsContainer}>
        <div className={styles.featuredInternalProjectsSection}>
          <h3 className={styles.featuredInternalProjectsSectionTitle}>
            Explore projects
          </h3>
          <p className={styles.featuredInternalProjectsSectionDescription}>
            Check out some of the products that we’re developing in open source
            or <Link to="/explore-projects">view all projects</Link>
          </p>
        </div>

        <HomePageInternalProjects data={internalProjects} />
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;
