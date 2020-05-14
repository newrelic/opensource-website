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
  query ExternalProjects($slug: String, $pagePath: String) {
    project: allProjects(
      filter: { slug: { eq: $slug }, projectType: { eq: "external" } }
    ) {
      nodes {
        ...projectFields
        subProjects {
          ...projectFields
        }
      }
    }
    sitePage: allSitePage(filter: { path: { eq: $pagePath } }) {
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

const SubProjects = ({ projects }) => {
  return (
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
            {p.githubUrl && (
              <div className={styles.subProjectCallToAction}>
                <a href="button" className="button button-tertiary">
                  <img src={iconGitHub} alt="GitHub Logo" />
                  View Repo
                </a>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
SubProjects.propTypes = {
  projects: PropTypes.array
};

const ExternalProjectPage = ({ data }) => {
  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'project.nodes[0]', false);
  const contentEditLink = get(data, 'sitePage.nodes[0].fields.contentEditLink');
  const subProjects = get(project, 'subProjects', false);

  if (!project) {
    return renderNotFound();
  }

  const mainContent = get(project, 'mainContent.mdx.compiledMdx', false);

  return (
    <Layout
      hasHeaderBg
      className={styles.projectPageLayout}
      editLink={contentEditLink}
    >
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
            <ProjectMainContent mdx={mainContent} project={project} />
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
          {project.team && (
            <>
              <h4>Involved from New Relic</h4>
              {project.team.map(relic => (
                <AsideNavigationItem
                  key={relic.name}
                  icon={relic.avatarUrl}
                  label={relic.name}
                  subLabel={relic.role}
                  to={relic.githubUrl}
                />
              ))}
            </>
          )}
        </aside>
      </div>
    </Layout>
  );
};
ExternalProjectPage.propTypes = {
  data: PropTypes.object
};

export default ExternalProjectPage;
