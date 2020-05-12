import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import AsideNavigationItem from '../components/AsideNavigationItem';
import styles from './external-project-page.module.scss';

import iconGitHubGreen from '../images/icon-github-green.svg';
import iconGitHub from '../images/icon-github.svg';

export const query = graphql`
  query ExternalProjects($slug: String) {
    allProjects(
      filter: { slug: { eq: $slug }, projectType: { eq: "external" } }
    ) {
      nodes {
        ...projectFields
        subProjects {
          ...projectFields
        }
      }
    }
  }
`;

const SubProjects = ({ projects }) => {
  return (
    <>
      <h3>Sub Projects</h3>
      <ul className={styles.subProjectList}>
        {projects.map(p => {
          return (
            <li key={p.fullName} className={styles.subProject}>
              <div className={styles.subProjectCopy}>
                <h4 className={styles.subProjectName}>{p.title}</h4>
                <p className={styles.subProjectDescription}>
                  {p.description
                    ? p.description
                    : 'No description available for this project'}
                </p>
              </div>
              <div className={styles.subProjectCallToAction}>
                <button type="button" className="button button-tertiary">
                  <img src={iconGitHub} alt="GitHub Logo" />
                  View repo
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
SubProjects.propTypes = {
  projects: PropTypes.array
};

const ExternalProjectPage = ({ data }) => {
  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'allProjects.nodes[0]', false);
  const subProjects = get(project, 'subProjects', false);

  if (!project) {
    return renderNotFound();
  }

  const mainContent = get(project, 'mainContent.mdx.compiledMdx', false);

  return (
    <Layout hasHeaderBg className={styles.projectPageLayout}>
      <SEO title="Opensource Project" />
      <PageHeading
        title={project.title}
        subheader={project.description}
        icon={project.iconUrl}
        hasSeparator
      />
      <div className="primary-content">
        <main className={`primary-content-main ${styles.primaryContentMain}`}>
          {mainContent && (
            <ProjectMainContent
              mdx={project.mainContent.mdx.compiledMdx}
              project={project}
            />
          )}
          {subProjects && <SubProjects projects={subProjects} />}
        </main>
        <aside className="primary-content-aside">
          <div className={styles.callToActionContainer}>
            <div className={styles.callToActionButtons}>
              <div className={styles.callToActionButtonsContainer}>
                <a
                  href={`${project.githubUrl}`}
                  className="button button-primary"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
                <a
                  href={project.githubUrl}
                  className="button button-secondary"
                  rel="noopener noreferrer"
                >
                  <img src={iconGitHubGreen} alt="GitHub logo" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <h4>New Relic Contributors</h4>
          <AsideNavigationItem
            icon="https://api.adorable.io/avatars/95/sarrah@adorable.io.png"
            label="John McGibbons"
            to="https://github.com/tangollama"
          />
          <AsideNavigationItem
            icon="https://api.adorable.io/avatars/90/katie@adorable.png"
            label="Sarah Summers"
            to="https://github.com/tangollama"
          />
          <AsideNavigationItem
            icon="https://api.adorable.io/avatars/90/Karen@adorable.png"
            label="Alex Williamson"
            to="https://github.com/tangollama"
          />
        </aside>
      </div>
    </Layout>
  );
};
ExternalProjectPage.propTypes = {
  data: PropTypes.object
};

export default ExternalProjectPage;
