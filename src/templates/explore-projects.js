import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { orderBy } from 'lodash';

import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';
import ProjectSearch from '../components/ProjectSearch';
import ProjectCard from '../components/ProjectCard';

import placeholderIcon from '../images/page-heading-icon-placeholder.jpg';

import styles from './projects.module.scss';

const ExploreProjectsPage = props => {
  const { pageContext } = props;
  const { projectData } = pageContext;
  const {
    allProjects,
    allLanguages,
    allCategories,
    allProjectTypes,
    searchEngineOptions
  } = projectData;

  const filterOptions = {
    allCategories: { title: 'Categories', options: allCategories },
    allLanguages: { title: 'Language', options: allLanguages },
    allProjectTypes: { title: 'Type', options: allProjectTypes }
  };

  const featuredProjectsToShow = 3;
  const projectsToShow = 24; // Set to 0 for all

  const renderFeaturedProjects = ({ projects, featuredProjectsToShow }) => {
    return projects.slice(0, featuredProjectsToShow).map(p => {
      const link = p.permalink.replace('https://opensource.newrelic.com', '');

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
            <Link
              className={`button ${styles.featuredProjectButton}`}
              key={p.id}
              to={link}
            >
              View Project
            </Link>
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
    const projectsToList =
      projectsToShow > 0
        ? projects.slice(featuredProjectsToShow, projectsToShow)
        : projects;

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
      <ProjectSearch
        data={allProjects}
        engine={searchEngineOptions}
        filterOptions={filterOptions}
      >
        {({ projects, searchQuery }) => {
          const sortedProjects = orderBy(
            projects,
            p => {
              return p.stats.commits;
            },
            'desc'
          );

          return (
            <>
              <div className={styles.featuredProjects}>
                {searchQuery === '' &&
                  renderFeaturedProjects({
                    projects: sortedProjects,
                    featuredProjectsToShow
                  })}
              </div>

              <div className={styles.projectListingContainer}>
                {renderProjectListing(sortedProjects)}
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
