import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { get } from 'lodash';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import AsideNavigationItem from '../components/AsideNavigationItem';
import * as styles from './external-project-page.module.scss';

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
        component
        path
      }
    }
  }
`;

const SubProjects = ({ projects }) => {
  return (
    <ul className={styles.subProjectList}>
      {projects.map((p) => {
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
                <Button
                  as="a"
                  variant={Button.VARIANT.LINK}
                  href={p.githubUrl}
                  target="__blank"
                  css={css`
                    .dark-mode & {
                      border-color: transparent;
                    }

                    &&&:after {
                      display: none;
                    }
                  `}
                >
                  <img
                    css={css`
                      margin-right: 0.5rem;
                    `}
                    src={iconGitHub}
                    alt="GitHub Logo"
                  />
                  <span>View Repo</span>
                </Button>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
SubProjects.propTypes = {
  projects: PropTypes.array,
};

const ExternalProjectPage = ({ data }) => {
  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'project.nodes[0]', false);
  const subProjects = get(project, 'subProjects', false);

  if (!project) {
    return renderNotFound();
  }

  const mainContent = get(project, 'mainContent.mdx.compiledMdx', false);
  const fileRelativePath = get(
    project,
    'mainContent.mdx.fields.fileRelativePath'
  );

  return (
    <Layout
      hasHeaderBg
      className={styles.projectPageLayout}
      editLink={fileRelativePath}
    >
      <SEO title={project.title} />
      <PageHeading
        showIcon
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
          <div>
            <div
              css={css`
                margin-bottom: 1rem;
              `}
              className={styles.callToActionButtons}
            >
              <div className={styles.callToActionButtonsContainer}>
                <Button
                  as="a"
                  variant={Button.VARIANT.PRIMARY}
                  href={`${
                    get(project, ['website', 'url'], '') || project.githubUrl
                  }`}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </Button>
                <Button
                  as="a"
                  variant={Button.VARIANT.LINK}
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  css={css`
                    .dark-mode & {
                      border-color: transparent;
                    }
                  `}
                >
                  <img
                    css={css`
                      margin-right: 0.5rem;
                    `}
                    src={iconGitHubGreen}
                    alt="GitHub logo"
                  />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          {project.team && (
            <>
              <h4>Involved from New Relic</h4>
              {project.team.map((relic) => (
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
  data: PropTypes.object,
};

export default ExternalProjectPage;
