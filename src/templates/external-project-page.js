import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import ContributorListing from '../components/ContributorListing';
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

  const projectStats = get(project, 'stats', false);
  let tags = [
    {
      name: 'category',
      value: get(project, 'ossCategory.title', '')
    },
    {
      name: 'language',
      value: get(project, 'primaryLanguage', '')
    },
    {
      name: 'version',
      value: get(project, 'stats.latestRelease.name', '')
    }
  ];

  if (project.projectTags) {
    tags = tags.concat(
      project.projectTags.map(i => {
        return {
          name: 'tag',
          value: i.title
        };
      })
    );
  }

  tags = tags.filter(i => i.value !== null && i.value !== '');

  const mainContent = get(project, 'mainContent.mdx.compiledMdx', false);
  const supportUrl = get(project, 'supportUrl', false);
  const ossCategory = get(project, 'ossCategory', false);

  return (
    <Layout hasHeaderBg className={styles.projectPageLayout}>
      <SEO title="Opensource Project" />
      <PageHeading
        title={project.title}
        subheader={project.description}
        icon={project.iconUrl}
        tags={tags}
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
          {!mainContent && (
            <>
              <h2>Getting Started</h2>
              <p>
                Go to the project's{' '}
                <Link
                  to={project.githubUrl}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  README
                </Link>{' '}
                for setup and usage details.
              </p>
            </>
          )}

          {projectStats && (
            <>
              <h3>Top Contributors</h3>
              <p>
                Thank you to the following and{' '}
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href={`${project.githubUrl}/graphs/contributors`}
                >
                  all contributors
                </a>
                .
              </p>
              <ContributorListing
                contributors={projectStats.cachedContributors}
                project={project}
              />
            </>
          )}
        </main>
        <aside className="primary-content-aside">
          <div className={styles.callToActionContainer}>
            <div className={styles.callToActionButtons}>
              <div className={styles.callToActionButtonsContainer}>
                <a
                  href={`${project.githubUrl}/stargazers`}
                  className="button button-primary"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconGitHubWhite} alt="GitHub logo" />
                  Star
                </a>
                <a
                  href={project.githubUrl}
                  className="button button-secondary"
                  rel="noopener noreferrer"
                >
                  Fork GitHub Repo
                </a>
              </div>
              {project.stats &&
                project.stats.license &&
                project.stats.license.spdxId !== 'NOASSERTION' && (
                  <div className={styles.licenseFootnote}>
                    <small>
                      Distributed under{' '}
                      <strong>{project.stats.license.name}</strong>.
                    </small>
                  </div>
                )}
            </div>
            {ossCategory && (
              <div className={styles.callToActionCategorySpecification}>
                <h5 className={styles.callToActionCategory}>
                  <Link to="/oss-category" rel="noopener noreferrer">
                    {project.ossCategory.title}
                  </Link>
                </h5>
                <p className={styles.callToActionDescription}>
                  {project.ossCategory.description}
                </p>
              </div>
            )}
          </div>

          {supportUrl ? (
            <>
              <h4>Support</h4>
              <p>
                Looking for help? Go to this project's thread in the{' '}
                <a href={supportUrl} target="__blank" rel="noopener noreferrer">
                  Explorers Hub
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <h4>Support</h4>
              <p>
                This project does not have a <strong>monitored</strong>{' '}
                <em>topic</em>, but you may search the{' '}
                <a
                  href={`https://discuss.newrelic.com/search?q=${project.title}`}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Explorers Hub
                </a>{' '}
                for help.
              </p>
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
