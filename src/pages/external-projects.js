import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectModule from '../components/ProjectModule';

import styles from './external-projects.module.scss';
import OpenTelemetryIcon from '../images/open-telemetry-icon.jpg';
import freeCodeCampIcon from '../images/free-code-camp-icon.jpg';
import tensorFlowIcon from '../images/tensor-flow-icon.jpg';

const ExternalProjects = () => {
  const externalProjects = [
    {
      title: 'Open Telemetry',
      description:
        'New Relic has invested 30 billion hours into the development of Open Telemetry to help provide robust portable telemetry to all.',
      icon: OpenTelemetryIcon,
      link: '/open-telemetry',
      githubUrl: 'https://github.com/open-telemetry',
      website: 'https://opentelemetry.io/'
    },
    {
      title: 'freeCodeCamp',
      description:
        'New Relic has invested 1,137,000 hours of engineering into freeCodeCamp to help provide educate the next generation engineers.',
      icon: freeCodeCampIcon,
      link: '/#',
      githubUrl: 'https://github.com/freeCodeCamp/freeCodeCamp',
      website: 'https://www.freecodecamp.org/'
    },
    {
      title: 'TensorFlow',
      description:
        'We <3 TensorFlow and plan to continue to invest at least 10,000 weekly into the maintenance of the platform to help train ml mipsums.',
      icon: tensorFlowIcon,
      link: '/#',
      githubUrl: 'https://github.com/tensorflow',
      website: 'https://www.tensorflow.org/'
    }
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
