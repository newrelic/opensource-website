import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { orderBy } from 'lodash';

import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';
import ProjectSearch from '../components/ProjectSearch';
import ProjectCard from '../components/ProjectCard';

import placeholderIcon from '../images/page-heading-icon-placeholder.jpg';
import searchIcon from '../images/icon-search.svg';

import styles from './projects.module.scss';

const ExploreProjectsPage = props => {
  const [projectsToShow, setProjectsToShow] = useState(24);
  const { pageContext } = props;
  const { projectData } = pageContext;
  const {
    allProjects,
    allLanguages,
    allCategories,
    allProjectTags,
    searchEngineOptions
  } = projectData;

  const filterOptions = {
    allCategories: { title: 'Categories', options: allCategories },
    allLanguages: { title: 'Language', options: allLanguages },
    allProjectTags: { title: 'Type', options: allProjectTags }
  };

  const featuredProjectsToShow = 3;

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

  const renderProjectListing = ({ projects, showFeatured }) => {
    const start = showFeatured ? featuredProjectsToShow : 0;
    const end =
      projects.length >= projectsToShow ? projectsToShow : projects.length;

    const projectsToList =
      projectsToShow > 0 ? projects.slice(start, end) : projects;

    return projectsToList.map(p => {
      return <ProjectCard key={p.id} project={p} />;
    });
  };

  const renderShowAllButton = sortedProjects => {
    if (sortedProjects.length - projectsToShow > 0 && projectsToShow !== 0) {
      return (
        <div className={styles.showAllButtonContainer}>
          <button
            className="button button-tertiary"
            type="button"
            onClick={() => setProjectsToShow(0)}
          >
            Show {sortedProjects.length - projectsToShow} more projects
          </button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <Layout fullWidth mainClassName={styles.exploreProjectsLayout}>
      <PageHeading
        title="Explore projects"
        subheader="Projects and products being developed in open source"
      />
      <ProjectSearch
        data={allProjects}
        engine={searchEngineOptions}
        filterOptions={filterOptions}
      >
        {({ projects, searchQuery, filterValues }) => {
          const hasFilters = Object.values(filterValues).some(
            x => x !== null && x !== ''
          );
          const showFeatured = searchQuery === '' && !hasFilters;
          const sortedProjects = orderBy(
            projects,
            p => {
              return p.stats ? p.stats.commits : 0;
            },
            'desc'
          );

          return (
            <>
              {showFeatured && (
                <div className={styles.featuredProjects}>
                  {renderFeaturedProjects({
                    projects: sortedProjects,
                    featuredProjectsToShow
                  })}
                </div>
              )}

              <div className={styles.projectListingContainer}>
                {renderProjectListing({
                  projects: sortedProjects,
                  showFeatured
                })}
              </div>
              {renderShowAllButton(sortedProjects)}
              {sortedProjects.length === 0 && searchQuery !== '' ? (
                <div className={styles.searchEmptyState}>
                  <img
                    src={searchIcon}
                    className={styles.searchEmptyStateIcon}
                    alt="search icon"
                  />
                  <h3 className={styles.searchEmptyStateTitle}>
                    No results for <em>"{searchQuery}"</em>
                  </h3>
                  <p className={styles.searchEmptyStateDescription}>
                    It seems we can’t find any results based on your search.
                  </p>
                </div>
              ) : (
                ''
              )}
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
