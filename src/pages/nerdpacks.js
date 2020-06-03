import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import styles from './collection.module.scss';

export const query = graphql`
  query NerdpackProjects($path: String) {
    allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        projectTags: { elemMatch: { slug: { eq: "nr1-app" } } }
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

const NerdpackPage = ({ data }) => {
  // console.debug(data);
  const allProjects = data.allProjects.edges.map(p => p.node);
  const catalogProjects = allProjects.filter(
    p => p.ossCategory.slug === 'new-relic-one-catalog-project'
  );
  const otherProjects = allProjects.filter(
    p => p.ossCategory.slug !== 'new-relic-one-catalog-project'
  );

  return (
    <Layout
      fullWidth
      className={styles.collectionPage}
      editLink={get(data, 'sitePage.nodes[0].fields.contentEditLink')}
    >
      <SEO title="Open source New Relic One applications" />
      <PageHeading
        title="New Relic One Applications"
        subheader="Explore the New Relic One Applications that are available in open source."
      />
      <div className={styles.featuredVideoContainer}>
        <div className="responsive-video">
          <iframe
            width="578"
            height="328.125"
            src="https://www.youtube.com/embed/ZagZfNQYJEU?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <section className={styles.primaryBodyCopy}>
        <h5 className={styles.primaryBodyCopyHeader}>
          Open source New Relic One applications
        </h5>
        <p className={styles.primaryBodyCopyDescription}>
          New Relic has a growing body of open-source apps that can extend and
          enhance your data views. The New Relic One Catalog provides a fast,
          easy way to browse through the available apps and subscribe to the
          ones you want, all from the New Relic One GUI.
          <br />
          <br />
          <br />
          The Catalog also provides links to the code for you to futher
          customize. You can borrow code sections to use in your own{' '}
          <a href="https://developer.newrelic.com/use-cases/build-new-relic-one-applications">
            New Relic One applications
          </a>
          , or explore the source to understand how they work. Check out our{' '}
          <a href="/explore-projects/?tag=Template">layout templates</a>, which
          give you a headstart by letting you choose common layouts.
        </p>
      </section>
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            New Relic One Catalog Apps
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Explore the open source repositories for applications in the New
            Relice One Catalog
          </p>
        </header>
        <div className={styles.collectionListing}>
          {catalogProjects.map(project => {
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
            Other New Relic One Apps
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Explore the open source repositories for all other New Relic One
            apps
          </p>
        </header>
        <div className={styles.collectionListing}>
          {otherProjects.map(project => {
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

NerdpackPage.propTypes = {
  data: PropTypes.object
};

export default NerdpackPage;
