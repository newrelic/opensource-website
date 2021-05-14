import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import * as styles from './collection.module.scss';

export const query = graphql`
  query NerdpackLayouts($path: String) {
    allProjects(filter: { name: { regex: "/layout/" } }) {
      edges {
        node {
          ...exploreProjectsFields
        }
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

const LayoutsPage = ({ data, pageContext }) => {
  // console.debug(data);
  const allProjects = data.allProjects.edges.map((p) => {
    const project = p.node;
    project.title = project.title.startsWith('New Relic One Nerdpack Layout')
      ? `${project.title.substring(
          'New Relic One Nerdpack Layout'.length
        )} Layout`
      : project.title;
    return project;
  });

  return (
    <Layout
      fullWidth
      className={styles.collectionPage}
      editLink={pageContext.fileRelativePath}
    >
      <SEO title="Open source New Relic One applications" />
      <PageHeading
        title="Nerdpack Template Layouts"
        subheader="Build effective applications that look great with our layout library."
      />
      <div className={styles.featuredVideoContainer}>
        <div className="responsive-video">
          <iframe
            width="578"
            height="328.125"
            src="https://www.youtube.com/embed/p5qTjujy0PU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <section className={styles.primaryBodyCopy}>
        <h5 className={styles.primaryBodyCopyHeader}>
          New Relic One Nerdpack Template Layouts
        </h5>
        <p className={styles.primaryBodyCopyDescription}>
          Getting started with a custom application can be challenging with user
          experience design is not your primary gifting. To help developers get
          direction and momentum faster, we've published a series of Nerdpack
          template layouts that you can clone and crib. <br />
          Accelerate development of your own New Relic One application by
          leveraging one of these community-driven templates; and if you improve
          or want to extend the library, we're always accepting{' '}
          <a href="https://github.com/newrelic/nr1-nerdpack-layout-standard/pulls">
            pull requests
          </a>
          .
        </p>
      </section>
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Nerdpack Template Layouts
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Build a better application beginning with a better starting point
          </p>
        </header>
        <div className={styles.collectionListing}>
          {allProjects.map((project) => {
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

LayoutsPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default LayoutsPage;
