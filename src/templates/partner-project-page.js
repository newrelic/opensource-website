import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import styles from './project-page.module.scss';

import iconGitHubWhite from '../images/icon-github-white.svg';

export const query = graphql`
  query PartnerProjects($slug: String) {
    allProjects(
      filter: { slug: { eq: $slug }, projectType: { eq: "partner" } }
    ) {
      nodes {
        ...projectFields
      }
    }
  }
`;

const PartnerProjectPage = ({ data }) => {
  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'allProjects.nodes[0]', false);

  if (!project) {
    return renderNotFound();
  }

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
      <SEO title="A single project page" />
      <PageHeading
        title={project.title}
        subheader={project.description}
        icon={project.iconUrl}
        tags={tags}
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
PartnerProjectPage.propTypes = {
  data: PropTypes.object
};

export default PartnerProjectPage;
