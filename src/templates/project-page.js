import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/react';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { get } from 'lodash';
import { Edit } from 'react-feather';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import ContributorListing from '../components/ContributorListing';
import * as styles from './project-page.module.scss';

import openIssueIcon from '../images/icon-open-issue.svg';
import chatIcon from '../images/icon-chat.svg';
import tagIcon from '../images/icon-tag.svg';
import commitIcon from '../images/icon-commit.svg';
import prIcon from '../images/icon-pr.svg';
import contributorIcon from '../images/icon-contributor.svg';
import openIssueGreyIcon from '../images/icon-open-issue-grey.svg';
import chatLightIcon from '../images/icon-chat-light.svg';
import tagLightIcon from '../images/icon-tag-light.svg';
import commitLightIcon from '../images/icon-commit-light.svg';
import prLightIcon from '../images/icon-pr-light.svg';
import contributorLightIcon from '../images/icon-contributor-light.svg';
import openIssueLightIcon from '../images/icon-open-issue-light.svg';
import iconGitHubWhite from '../images/icon-github-white.svg';
import iconGitHubDarkGreen from '../images/icon-github-dark-green.svg';

import withDarkMode from '../components/withDarkMode';

export const query = graphql`
  query NewRelicProjects($slug: String, $pagePath: String) {
    site {
      siteMetadata {
        repository
        branch
      }
    }
    project: allProjects(
      filter: { slug: { eq: $slug }, projectType: { eq: "newrelic" } }
    ) {
      nodes {
        ...projectFields
      }
    }
    sitePage: allSitePage(filter: { path: { eq: $pagePath } }) {
      nodes {
        componentPath
        path
      }
    }
  }
`;

const ProjectPage = (props) => {
  const { data, darkMode } = props;

  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'project.nodes[0]', false);
  // console.debug(project);

  if (!project) {
    return renderNotFound();
  }

  const projectStats = get(project, 'stats', false);
  const tags = [
    {
      name: 'category',
      value: get(project, 'ossCategory.title', ''),
    },
    {
      name: 'language',
      value: get(project, 'primaryLanguage', ''),
    },
    {
      name: 'version',
      value: get(project, 'stats.latestRelease.name', ''),
    },
  ];

  const {
    site: {
      siteMetadata: { branch, repository },
    },
  } = data;
  const mainContent = get(project, 'mainContent.mdx.compiledMdx', false);
  const supportUrl = get(project, 'supportUrl', false);
  const ossCategory = get(project, 'ossCategory', false);
  const fileRelativePath = get(
    project,
    'mainContent.mdx.fields.fileRelativePath'
  );

  const contentEditUrl = `${repository}/blob/${branch}/${fileRelativePath}`;

  const [screenshotModalActive, setScreenshotModalActive] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const renderIssues = ({ projectStats, darkMode }) => {
    return projectStats.cachedIssues.map((issue) => {
      return (
        <a
          href={issue.url}
          key={issue.id}
          className={styles.projectPageIssue}
          rel="noopener noreferrer"
          css={css`
            text-decoration: none;
          `}
        >
          <div className={styles.projectPageIssueHeader}>
            <img
              src={openIssueIcon}
              alt="Open Issue Icon"
              className={styles.projectPageIssueHeaderIcon}
            />
            <h5 className={styles.projectPageIssueHeaderTitle}>
              {issue.title}
            </h5>
          </div>
          <footer className={styles.projectPageIssueFooter}>
            <small className={styles.projectPageIssueFooterMeta}>
              {issue.number} opened on{' '}
              {format(new Date(issue.createdAt), 'MMM d')} by {issue.createdBy}
            </small>
            {issue.comments.totalCount > 0 && (
              <div className={styles.projectPageIssueFooterDiscussion}>
                <img
                  src={darkMode.value ? chatLightIcon : chatIcon}
                  alt="Chat Icon"
                  className={styles.projectPageIssueFooterDiscussionIcon}
                />
                <span className={styles.projectPageIssueFooterDiscussionCount}>
                  {issue.comments.totalCount}
                </span>
              </div>
            )}
          </footer>
        </a>
      );
    });
  };

  const renderScreenshots = () => {
    const hasScreenshots =
      projectStats &&
      projectStats.screenshots &&
      Array.isArray(projectStats.screenshots) &&
      projectStats.screenshots.length > 0;

    if (!hasScreenshots) {
      // TO DO - Add an empty state
      return null;
    }

    const screenshots = projectStats.screenshots.map((screenshot, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            setScreenshotModalActive(true);
            setCurrentScreenshotIndex(index);
          }}
          className={styles.projectScreenshotListItem}
        >
          <img src={screenshot} alt={`Screenshot of ${project.title}`} />
        </li>
      );
    });

    const screenshotsObject = projectStats.screenshots.map((screenshot) => {
      return {
        source: screenshot,
        caption: '',
      };
    });

    return (
      <>
        <div className={styles.projectScreenshotsContainer}>
          <ul className={styles.projectScreenshotList}>{screenshots}</ul>
        </div>
        <ModalGateway>
          {screenshotModalActive ? (
            <Modal onClose={() => setScreenshotModalActive(false)}>
              <Carousel
                views={screenshotsObject}
                currentIndex={currentScreenshotIndex}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  };

  const sidebarProjectTags = () => {
    const tag = project.projectTags.map((tag) => {
      return (
        <li className={styles.sidebarTagListTag} key={tag.title}>
          <a
            href={`/explore-projects/?tag=${tag.title}`}
            css={css`
              text-decoration: none;
            `}
          >
            {tag.title}
          </a>
        </li>
      );
    });

    return <ul className={styles.sidebarTags}>{tag}</ul>;
  };

  // TO DO - What do we display when we do not have stats?
  const renderEmptyProjectStats = () => {
    return null;
  };

  const renderEmptyIssues = () => {
    return null;
  };

  const renderCallsToAction = (isPageHeadingCTA) => {
    return (
      <div
        className={`${styles.callToActionButtonsContainer} ${
          isPageHeadingCTA ? styles.pageHeadingCTA : ''
        }`}
      >
        <Button
          as="a"
          variant={Button.VARIANT.PRIMARY}
          href={project.githubUrl}
          rel="noopener noreferrer"
        >
          <img
            css={css`
              margin-right: 0.5rem;
            `}
            src={darkMode.value ? iconGitHubDarkGreen : iconGitHubWhite}
            alt="GitHub logo"
          />
          View Repo
        </Button>
        <Button
          as="a"
          variant={Button.VARIANT.PLAIN}
          href={contentEditUrl}
          target="__blank"
          rel="noopener noreferrer"
          css={css`
            .dark-mode & {
              border-color: transparent;
            }
          `}
        >
          <span className={styles.buttonIcon}>
            <Edit color="currentColor" size={16} />
          </span>
          Edit page
        </Button>
      </div>
    );
  };

  return (
    <Layout
      hasHeaderBg
      className={styles.projectPageLayout}
      editLink={fileRelativePath}
    >
      <SEO title={project.title} description={project.description} />
      <PageHeading
        showIcon
        project={project}
        title={project.title}
        subheader={project.description}
        icon={project.iconUrl}
        tags={tags}
        hasSeparator
        callToAction={() => renderCallsToAction(true)}
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
          {project.acceptsContributions && (
            <>
              <h2>Contributions</h2>
              <p>
                <strong>{project.title}</strong> accepts contributions under our
                open source{' '}
                <a
                  href="/code-of-conduct"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct
                </a>
                .
              </p>
              <h3>Issues / Enhancement Requests</h3>
              <p>
                Issues and enhancement requests can be submitted in the{' '}
                <a
                  href={`${project.githubUrl}/issues`}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Issues tab of this repository
                </a>
                . Please search for and review the existing open issues before
                submitting a new issue.
              </p>
              <h3>Code Contributions</h3>
              <p>
                Code contributions are welcome. Please review our{' '}
                <a
                  href={
                    project.contributingGuideUrl ||
                    `${project.githubUrl}/blob/${
                      project.defaultBranch || 'main'
                    }/CONTRIBUTING.md`
                  }
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Contributors Guide
                </a>{' '}
                and review the{' '}
                <a
                  href={`${project.githubUrl}/issues`}
                  rel="noopener noreferrer"
                  target="__blank"
                >
                  Issues
                </a>{' '}
                list. New Relic open source projects follow a{' '}
                <Link to="/contributing">
                  fork-and-pull-request code contribution workflow
                </Link>
                .
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
        <aside
          className={`primary-content-aside ${styles.primaryContentAside}`}
        >
          <div>
            <div className={styles.callToActionButtons}>
              {renderCallsToAction()}
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

          {projectStats &&
            projectStats.screenshots &&
            projectStats.screenshots.length > 0 && (
              <>
                <h4>Screenshots</h4>
                {renderScreenshots()}
              </>
            )}

          {supportUrl ? (
            <>
              <h4>Support</h4>
              <p>
                Looking for help? Go to this project's thread in the{' '}
                <a href={supportUrl} target="__blank" rel="noopener noreferrer">
                  Explorers Hub
                </a>
                , and review the{' '}
                <a
                  href="https://docs.newrelic.com/docs/licenses/license-information/general-usage-licenses/global-technical-support-offerings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Relic Support Policy
                </a>{' '}
                for details on open source support.
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
                for help, and review the{' '}
                <a
                  href="https://docs.newrelic.com/docs/licenses/license-information/general-usage-licenses/global-technical-support-offerings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Relic Support Policy
                </a>{' '}
                for details on open source support.
              </p>
            </>
          )}

          {projectStats && (
            <>
              <h4>Repo stats</h4>
              <ul className={styles.repoStats}>
                <li className={styles.repoStat}>
                  <img
                    src={
                      darkMode.value ? contributorLightIcon : contributorIcon
                    }
                    alt="contributor icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.contributors}
                  </span>
                  <a
                    href={`${project.githubUrl}/graphs/contributors`}
                    target="__blank"
                    rel="noopener noreferrer"
                    className={styles.repoStatLabel}
                  >
                    Contributors
                  </a>
                </li>
                <li className={styles.repoStat}>
                  <img
                    src={darkMode.value ? tagLightIcon : tagIcon}
                    alt="release icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.releases}
                  </span>
                  <a
                    href={`${project.githubUrl}/releases`}
                    className={styles.repoStatLabel}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    Releases
                  </a>
                </li>
                <li className={styles.repoStat}>
                  <img
                    src={darkMode.value ? commitLightIcon : commitIcon}
                    alt="commit icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.commits}
                  </span>
                  <a
                    href={`${project.githubUrl}/commits`}
                    className={styles.repoStatLabel}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    Commits
                  </a>
                </li>
                <li className={styles.repoStat}>
                  <img
                    src={darkMode.value ? prLightIcon : prIcon}
                    alt="pull request icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.pullRequests.open}
                  </span>
                  <a
                    href={`${project.githubUrl}/pulls`}
                    className={styles.repoStatLabel}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    Open Pull Requests
                  </a>
                </li>
                <li className={styles.repoStat}>
                  <img
                    src={
                      darkMode.value ? openIssueLightIcon : openIssueGreyIcon
                    }
                    alt="open issue icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.issues.open}
                  </span>
                  <a
                    href={`${project.githubUrl}/issues`}
                    className={styles.repoStatLabel}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    Open Issues
                  </a>
                </li>
              </ul>

              {projectStats.cachedIssues.length > 0 && (
                <>
                  <div className="aside-header-item">
                    <h4>Good first issues</h4>
                    <a
                      href={`${project.githubUrl}/issues`}
                      className="aside-header-item-button"
                    >
                      View all issues
                    </a>
                  </div>

                  {projectStats && renderIssues({ projectStats, darkMode })}
                  {!projectStats && renderEmptyIssues()}
                </>
              )}
            </>
          )}
          {project.projectTags && (
            <>
              <h4>Tags</h4>
              {sidebarProjectTags()}
            </>
          )}

          {!projectStats && renderEmptyProjectStats()}
        </aside>
      </div>
    </Layout>
  );
};
ProjectPage.propTypes = {
  data: PropTypes.object,
  darkMode: PropTypes.object,
};

export default withDarkMode(ProjectPage);
