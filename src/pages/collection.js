import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import * as styles from './collection.module.scss';

export const query = graphql`
  query CollectionProjects {
    allProjects(
      filter: {
        projectType: { eq: "newrelic" }
        projectTags: { elemMatch: { slug: { eq: "agent" } } }
      }
    ) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }
  }
`;

const CollectionPage = ({ data, pageContext }) => {
  const allProjects = data.allProjects.edges.map((p) => p.node);

  return (
    <Layout
      fullWidth
      className={styles.collectionPage}
      editLink={pageContext.fileRelativePath}
    >
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading
        title="New Relic Agents"
        subheader="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
      />
      <div className={styles.featuredVideoContainer}>
        <div className="responsive-video">
          <iframe
            width="578"
            height="328.125"
            src="https://www.youtube.com/embed/g00AeKlECZA?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <section className={styles.primaryBodyCopy}>
        <h5 className={styles.primaryBodyCopyHeader}>
          Duis mollis, est non commodo luctus
        </h5>
        <p className={styles.primaryBodyCopyDescription}>
          Etiam porta sem malesuada magna mollis euismod. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper
          ult nulla non metus auctor fringilla. Duis mollis, est non commodo
          luctus, eu nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Lorem ipsum Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu
          leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum
        </p>
      </section>
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Our Agents
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Explore the open source repositories for New Relic agent technology
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

CollectionPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default CollectionPage;
