import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { get } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectMainContent from '../components/ProjectMainContent';
import ContributorListing from '../components/ContributorListing';
import styles from './project-page.module.scss';

import openIssueIcon from '../images/icon-open-issue.svg';
import chatIcon from '../images/icon-chat.svg';
import tagIcon from '../images/icon-tag.svg';
import commitIcon from '../images/icon-commit.svg';
import prIcon from '../images/icon-pr.svg';
import contributorIcon from '../images/icon-contributor.svg';
import openIssueGreyIcon from '../images/icon-open-issue-grey.svg';
import iconGitHubWhite from '../images/icon-github-white.svg';

export const query = graphql`
  query Project($slug: String) {
    allProjects(filter: { slug: { eq: $slug } }) {
      nodes {
        ...projectFields
      }
    }
  }
`;

const ProjectPage = ({ data }) => {
  const renderNotFound = () => {
    return <h1>Project not found</h1>;
  };

  const project = get(data, 'allProjects.nodes[0]', false);

  if (!project) {
    return renderNotFound();
  }

  const projectStats = get(project, 'stats', false);
  const tags = [
    get(project, 'ossCategory.title', ''),
    get(project, 'primaryLanguage', '')
  ];
  const mainContent = get(project, 'mainContent.mdx.compiledMdx', false);
  const supportUrl = get(project, 'supportUrl', false);

  const [screenshotModalActive, setScreenshotModalActive] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const renderIssues = (project, projectStats) => {
    return projectStats.cachedIssues.map(issue => {
      return (
        <a
          href={issue.url}
          key={issue.id}
          className={styles.projectPageIssue}
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
                  src={chatIcon}
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

    const screenshotsObject = projectStats.screenshots.map(screenshot => {
      return {
        source: screenshot,
        caption: ''
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

  // TO DO - What do we display when we do not have stats?
  const renderEmptyProjectStats = () => {
    return null;
  };

  const renderEmptyIssues = () => {
    return null;
  };

  return (
    <Layout hasHeaderBg>
      <SEO title="A single project page" />
      <PageHeading
        title={project.title}
        subheader={project.description}
        icon={project.iconUrl}
        tags={tags}
        hasSeparator
      />
      <div className="primary-content">
        <main className="primary-content-main">
          {mainContent && (
            <ProjectMainContent mdx={project.mainContent.mdx.compiledMdx} />
          )}
          {!mainContent && <h2>No content found.</h2>}

          <h3>Top Contributors</h3>
          <p>Thanks to these people and <a target="contributors" href={project.githubUrl + '/graphs/contributors'}>more</a> for their contributions:</p>
          {projectStats && (
            <ContributorListing
              contributors={projectStats.cachedContributors}
              project={project}
            />
          )}
        </main>
        <aside className="primary-content-aside">
          <div className={styles.callToActionContainer}>
            <div className={styles.callToActionButtons}>
              <div className={styles.callToActionButtonsContainer}>
                <a
                  href={project.githubUrl}
                  className="button button-primary"
                  target="__blank"
                >
                  <img src={iconGitHubWhite} alt="GitHub logo" />
                  Star
                </a>
                <a
                  href={project.githubUrl}
                  className="button button-secondary"
                >
                  View GitHub Repo
                </a>
              </div>
              {supportUrl && (
                <small className={styles.callToActionSupport}>
                  Need help with the project?{' '}
                  <a href={supportUrl} rel="noopener noreferrer">
                    Try the support thread
                  </a>
                </small>
              )}
            </div>
            <div className={styles.callToActionCategorySpecification}>
              <h5 className={styles.callToActionCategory}>
                <Link to="/categories">{project.ossCategory.title}</Link>
              </h5>
              <p className={styles.callToActionDescription}>
                This code is a part of the New Relic One Catalog. It is
                available for installation and configuration via the New Relic
                One Homepage. You can install it via the Catalog launcher in New
                Relic One.
              </p>
            </div>
          </div>

          {projectStats.screenshots.length > 0 && (
            <>
              <h4>Screenshots</h4>
              {renderScreenshots()}
            </>
          )}

          {projectStats && (
            <>
              <h4>Repo stats</h4>
              <ul className={styles.repoStats}>
                <li
                  className={`${styles.repoStat} + ${styles.repoStatContributors}`}
                >
                  <img
                    src={contributorIcon}
                    alt="contributor icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.contributors}
                  </span>
                  <a
                    href={`${project.githubUrl}/graphs/contributors`}
                    className={styles.repoStatLabel}
                  >
                    Contributors
                  </a>
                </li>
                <li className={`${styles.repoStat} ${styles.repoStatReleases}`}>
                  <img
                    src={tagIcon}
                    alt="release icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.releases}
                  </span>
                  <a
                    href={`${project.githubUrl}/releases`}
                    className={styles.repoStatLabel}
                  >
                    Releases
                  </a>
                </li>
                <li className={`${styles.repoStat} ${styles.repoStatCommits}`}>
                  <img
                    src={commitIcon}
                    alt="commit icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.commits}
                  </span>
                  <a
                    href={`${project.githubUrl}/commits`}
                    className={styles.repoStatLabel}
                  >
                    Commits
                  </a>
                </li>
                <li
                  className={`${styles.repoStat} ${styles.repoStatPullRequests}`}
                >
                  <img
                    src={prIcon}
                    alt="pull request icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.pullRequests.open}
                  </span>
                  <a
                    href={`${project.githubUrl}/pulls`}
                    className={styles.repoStatLabel}
                  >
                    Open Pull Requests
                  </a>
                </li>
                <li className={`${styles.repoStat} ${styles.repoStatIssues}`}>
                  <img
                    src={openIssueGreyIcon}
                    alt="open issue icon"
                    className={styles.repoStatIcon}
                  />
                  <span className={styles.repoStatCount}>
                    {projectStats.issues.open}
                  </span>
                  <a
                    href={`${project.githubUrl}/issues`}
                    className={styles.repoStatLabel}
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

                  {projectStats && renderIssues(project, projectStats)}
                  {!projectStats && renderEmptyIssues()}
                </>
              )}
            </>
          )}

          {!projectStats && renderEmptyProjectStats()}
        </aside>
      </div>
    </Layout>
  );
};
ProjectPage.propTypes = {
  data: PropTypes.object
};

export default ProjectPage;
