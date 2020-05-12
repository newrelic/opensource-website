import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import styles from './project-page.module.scss';

import iconGitHubWhite from '../images/icon-github-white.svg';

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
        relatedProjects {
          ...projectFields
        }
      }
    }
  }
`;

const SubProjects = ({ projects }) => {
  return (
    <>
      <h2>Sub Projects</h2>
      <ul>
        {projects.map(p => {
          return <li key={p.fullName}>{p.fullName}</li>;
        })}
      </ul>
    </>
  );
};
SubProjects.propTypes = {
  projects: PropTypes.array
};

const RelatedProjects = ({ projects }) => {
  return (
    <>
      <h2>Related Projects</h2>
      <ul>
        {projects.map(p => {
          return <li key={p.fullName}>{p.fullName}</li>;
        })}
      </ul>
    </>
  );
};
RelatedProjects.propTypes = {
  projects: PropTypes.array
};

const ExternalProjectPage = ({ data }) => {
  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'allProjects.nodes[0]', false);
  const subProjects = get(project, 'subProjects', false);
  const relatedProjects = get(project, 'relatedProjects', false);

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
          {subProjects && <SubProjects projects={subProjects} />}
          {relatedProjects && <RelatedProjects projects={relatedProjects} />}
          {mainContent && (
            <ProjectMainContent
              mdx={project.mainContent.mdx.compiledMdx}
              project={project}
            />
          )}
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
                  <img src={iconGitHubWhite} alt="GitHub logo" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div>
            Relic contributor list goes here
          </div>
        </aside>
      </div>
    </Layout>
  );
};
ExternalProjectPage.propTypes = {
  data: PropTypes.object
};

export default ExternalProjectPage;
