import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageHighlights from '../components/HomePageHighlights';
import HomePageInternalProjects from '../components/HomePageInternalProjects';
import HomePageRecentArticles from '../components/HomePageRecentArticles';
import styles from './home-page.module.scss';

import OpenTelemetryIcon from '../images/open-telemetry-icon.jpg';
import freeCodeCampIcon from '../images/free-code-camp-icon.jpg';
import tensorFlowIcon from '../images/tensor-flow-icon.jpg';
import genericProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import articlePlaceholderImage1 from '../images/article-placeholder-image-1.jpg';
import articlePlaceholderImage2 from '../images/article-placeholder-image-2.jpg';
import articlePlaceholderImage3 from '../images/article-placeholder-image-3.jpg';

const IndexPage = () => {
  const externalProjects = [
    {
      title: 'Open Telemetry',
      description:
        'New Relic has invested 30 billion hours into the development of Open Telemetry to help provide robust portable telemetry to all.',
      icon: OpenTelemetryIcon,
      githubUrl: 'https://github.com/open-telemetry',
      website: 'https://opentelemetry.io/'
    },
    {
      title: 'freeCodeCamp',
      description:
        'New Relic has invested 1,137,000 hours of engineering into freeCodeCamp to help provide educate the next generation engineers.',
      icon: freeCodeCampIcon,
      githubUrl: 'https://github.com/freeCodeCamp/freeCodeCamp',
      website: 'https://www.freecodecamp.org/'
    },
    {
      title: 'TensorFlow',
      description:
        'We <3 TensorFlow and plan to continue to invest at least 10,000 weekly into the maintenance of the platform to help train ml mipsums.',
      icon: tensorFlowIcon,
      githubUrl: 'https://github.com/tensorflow',
      website: 'https://www.tensorflow.org/'
    }
  ];

  const internalProjects = [
    {
      name: 'nr1-kafka-agent',
      fullName: 'newrelic/nr1-kafka-agent',
      title: 'Kafka agent',
      githubUrl: 'https://github.com/newrelic/nr1-workload-geoops',
      permalink: 'https://opensource.newrelic.com/projects/nr1-workload-geoops',
      iconUrl: genericProjectIcon,
      shortDescription:
        'Nulla quis tortor orci. Etiam at risus et justo dignissim.'
    },
    {
      name: 'nr1-workload-geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      title: 'Go OpenCensus exporter',
      githubUrl: 'https://github.com/newrelic/nr1-workload-geoops',
      permalink: 'https://opensource.newrelic.com/projects/nr1-workload-geoops',
      iconUrl: genericProjectIcon,
      shortDescription:
        'Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.'
    },
    {
      name: 'nr1-workload-geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      title: 'Java Telemetry SDK',
      githubUrl: 'https://github.com/newrelic/nr1-workload-geoops',
      permalink: 'https://opensource.newrelic.com/projects/nr1-workload-geoops',
      iconUrl: genericProjectIcon,
      shortDescription:
        'Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
    },
    {
      name: 'nr1-workload-geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      title: 'New Relic CLI',
      githubUrl: 'https://github.com/newrelic/nr1-workload-geoops',
      permalink: 'https://opensource.newrelic.com/projects/nr1-workload-geoops',
      iconUrl: genericProjectIcon,
      shortDescription:
        'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.'
    },
    {
      name: 'nr1-workload-geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      title: 'Roku Agent',
      githubUrl: 'https://github.com/newrelic/nr1-workload-geoops',
      permalink: 'https://opensource.newrelic.com/projects/nr1-workload-geoops',
      iconUrl: genericProjectIcon,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
      name: 'nr1-workload-geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      title: 'Browser Analyzer',
      githubUrl: 'https://github.com/newrelic/nr1-browser-analyzer',
      permalink: 'https://opensource.newrelic.com/projects/nr1-workload-geoops',
      iconUrl:
        'https://github.com/newrelic/nr1-browser-analyzer/blob/master/icon.png?raw=true',
      shortDescription:
        'Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.'
    },
    {
      name: 'nr1-community',
      fullName: 'newrelic/nr1-community',
      title: 'Community',
      githubUrl: 'https://github.com/newrelic/nr1-community',
      permalink: 'https://opensource.newrelic.com/projects/nr1-community',
      iconUrl:
        'https://github.com/newrelic/nr1-community/blob/master/demo/launchers/nr1-community-demo-launcher/icon.png?raw=true',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.'
    },
    {
      name: 'nr1-workload-geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      title: 'Workload GeoOps',
      githubUrl: 'https://github.com/newrelic/nr1-community',
      permalink: 'https://opensource.newrelic.com/projects/nr1-community',
      iconUrl:
        'https://github.com/newrelic/nr1-workload-geoops/blob/master/icon.png?raw=true',
      shortDescription:
        'Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'
    }
  ];

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
      <SEO title="Home" />
      <div className={styles.heroContainer}>
        <h2 className={styles.homepageHeroHeading}>
          We believe in an open web toward the development of better tools in
          software for creating a more perfect web.
        </h2>
        <div className={styles.homepageHeroBody}>
          <p className={styles.homepageHeroBodyCopy}>
            This is the place where you track with <a href="#">New Relic</a>’s
            open source presence. Praesent commodo cursus magna, vel scelerisque
            nisl <a href="#">consectetur</a> et. Fusce dapibus curus.
          </p>
          <p className={styles.homepageHeroBodyCopy}>
            Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
            porta ac consectetur ac,
            <a href="#">vestibulum</a> at eros. Fusce dapibus, tellus ac cursus
            commodo, tortor.
          </p>
        </div>
      </div>

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

      <div className={styles.recentArticlesContainer}>
        <h3 className={styles.recentArticlesSectionTitle}>Recent articles</h3>
        <p className={styles.recentArticlesSectionDescription}>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam or{' '}
          <Link to="/blog">view more articles</Link>
        </p>
        <HomePageRecentArticles articles={recentArticles} />
      </div>
    </Layout>
  );
};

export default IndexPage;
