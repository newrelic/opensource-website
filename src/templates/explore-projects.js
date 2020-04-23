import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';
import ProjectSearch from '../components/ProjectSearch';
import ProjectCard from '../components/ProjectCard';

import placeholderIcon from '../images/page-heading-icon-placeholder.jpg';

import styles from './projects.module.scss';

const ExploreProjectsPage = props => {
  const { pageContext } = props;
  const { projectData } = pageContext;
  const { allProjects, options } = projectData;

  const renderFeaturedProjects = projects => {
    return projects.slice(0, 3).map(p => {
      return (
        <div className={styles.featuredProject} key={p.id}>
          <img
            className={styles.featuredProjectIcon}
            src={placeholderIcon}
            alt={`icon for ${p.title}`}
          />
          <div className={styles.featuredProjectPrimaryContent}>
            <h4 className={styles.featuredProjectTitle}>{p.title}</h4>
            <p className={styles.featuredProjectDescription}>
              {p.description
                ? p.description
                : `There is no description for this project`}
            </p>
            <a
              href={p.permalink}
              className={`button ${styles.featuredProjectButton}`}
            >
              View project
            </a>
          </div>
          <footer className={styles.featuredProjectFooter}>
            <span className={styles.featuredProjectFooterLink}>
              {p.ossCategory.title}
            </span>
            {p.primaryLanguage !== '' && (
              <span className={styles.featuredProjectFooterLink}>
                {p.primaryLanguage}
              </span>
            )}
          </footer>
        </div>
      );
    });
  };

  const renderProjectListing = projects => {
    const projectsToShow = 20; // Set to 0 for all
    const projectsToList =
      projectsToShow > 0 ? projects.slice(0, projectsToShow) : projects;

    return projectsToList.map(p => {
      return <ProjectCard key={p.id} project={p} />;
    });
  };

  return (
    <Layout fullWidth>
      <PageHeading
        title="Explore our projects"
        subheader="Projects and products that we're developing in open source"
      />
      <ProjectSearch data={allProjects} engine={options}>
        {({ projects }) => {
          return (
            <>
              <div className={styles.featuredProjects}>
                {renderFeaturedProjects(projects)}
              </div>

              <div className={styles.projectListingContainer}>
                {renderProjectListing(projects)}
              </div>
            </>
          );
        }}
      </ProjectSearch>
    </Layout>
  );
};

ExploreProjectsPage.propTypes = {
  pageContext: PropTypes.object
};
export default ExploreProjectsPage;
