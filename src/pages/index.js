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

import OpenTelemetryIcon from '../images/open-telemetry-icon.jpg';
import freeCodeCampIcon from '../images/free-code-camp-icon.jpg';
import tensorFlowIcon from '../images/tensor-flow-icon.jpg';
import genericProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import articlePlaceholderImage1 from '../images/article-placeholder-image-1.jpg';
import articlePlaceholderImage2 from '../images/article-placeholder-image-2.jpg';
import articlePlaceholderImage3 from '../images/article-placeholder-image-3.jpg';
import videoPlaceholder from '../images/video-placeholder.jpg';
import playButton from '../images/button-play.svg';
import closeIcon from '../images/icon-close.svg';

export const query = graphql`
  query HomePageQuery {
    topProjects: allProjects(
      filter: {projectType: {eq: "newrelic"}}
      sort: { fields: stats___commits, order: DESC }
      limit: 8

    ) {
      edges {
        node {
          ...projectFields
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const [heroVideoActive, setHeroVideoActive] = useState(false);
  const externalProjects = [
    {
      title: 'Open Telemetry',
      description:
        'New Relic has invested 30 billion hours into the development of Open Telemetry to help provide robust portable telemetry to all.',
      icon: OpenTelemetryIcon,
      link: '/projects/open-telemetry',
      contributorTotal: 7
    },
    {
      title: 'freeCodeCamp',
      description:
        'New Relic has invested 1,137,000 hours of engineering into freeCodeCamp to help provide educate the next generation engineers.',
      icon: freeCodeCampIcon,
      link: '/#',
      contributorTotal: 3
    },
    {
      title: 'TensorFlow',
      description:
        'We <3 TensorFlow and plan to continue to invest at least 10,000 weekly into the maintenance of the platform to help train ml mipsums.',
      icon: tensorFlowIcon,
      link: '/#',
      contributorTotal: 14
    }
  ];

  const internalProjects = get(data, 'topProjects.edges').map(i => i.node);
  console.log(internalProjects);
  internalProjects.forEach((p, index) => {
    internalProjects[index].iconUrl = genericProjectIcon;
  });

  const recentArticles = [
    {
      featuredImage: articlePlaceholderImage1,
      title: 'Why we invest in open source',
      snippet:
        'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    },
    {
      featuredImage: articlePlaceholderImage2,
      title: 'Open source in a pandemic',
      snippet:
        'Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    },
    {
      featuredImage: articlePlaceholderImage3,
      title: 'Shipping around the globe',
      snippet:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.'
    }
  ];

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
            <a href="/explore-projects">explore hundreds of projects</a> we're
            maintaining as well as our involvement in{' '}
            <a href="/open-standards">open standards</a>. Delivering on the
            promise of a more <strong>perfect</strong> Internet means developing
            more <strong>open source</strong> solutions together.{' '}
            <a href="/blog">Learn more</a>.
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
        <h3 className={styles.featuredInternalProjectsSectionTitle}>
          Explore projects
        </h3>
        <p className={styles.featuredInternalProjectsSectionDescription}>
          Check out some of the products that we’re developing in open source or{' '}
          <Link to="/explore-projects">view all projects</Link>
        </p>

        <HomePageInternalProjects data={internalProjects} />
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;
