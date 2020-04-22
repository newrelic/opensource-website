import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import ModalImage from 'react-modal-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ProjectReadme from '../components/ProjectReadme';
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
  query Project($fullName: String) {
    allProjectsJson(filter: { fullName: { eq: $fullName } }) {
      nodes {
        ...projectFields
      }
    }
  }
`;

const ProjectPage = ({ data }) => {
  console.log(JSON.stringify(Object.keys(data), null, 2));
  // const project = data.projectsJson;

  // This happens "magically"
  // const { fullName } = pageContext;

  const renderIssues = (project, projectStats) => {
    return projectStats.cachedIssues.map(issue => {
      return (
        <a href={issue.url} className={styles.projectPageIssue} key={issue.id}>
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
            <div className={styles.projectPageIssueFooterDiscussion}>
              <img
                src={chatIcon}
                alt="Chat Icon"
                className={styles.projectPageIssueFooterDiscussionIcon}
              />
              {issue.comments.totalCount > 0 && (
                <span className={styles.projectPageIssueFooterDiscussionCount}>
                  {issue.comments.totalCount}
                </span>
              )}
            </div>
          </footer>
        </a>
      );
    });
  };

  const renderScreenshots = (project, projectStats) => {
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
        <li key={index} className={styles.projectScreenshotListItem}>
          <ModalImage
            small={screenshot}
            large={screenshot}
            alt={`Screenshot of ${project.title}`}
            hideZoom
            hideDownload
          />
        </li>
      );
    });

    return <ul className={styles.projectScreenshotList}>{screenshots}</ul>;
  };

  // TO DO - What do we display when we do not have stats?
  const renderEmptyProjectStats = () => {
    return null;
  };

  const renderEmptyIssues = () => {
    return null;
  };

  const project = data.allProjectsJson.nodes[0];
  const projectStats = project.stats;

  const tags = [project.ossCategory.title, project.primaryLanguage];

  const hasProjectStats = projectStats;
  const hasReadme = project.mainContent;

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
          <h2>Integer posuere erat a ante venenatis</h2>
          <p>
            Donec sed odio dui. Donec sed odio dui. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Vestibulum id ligula porta felis euismod semper. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <h3>Integer posuere erat a ante venenatis</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <h3>What people are saying</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <blockquote>
            Vitae enim egestas egestas at gravida arcu, amet in. Facilisis at
            massa amet, aliquet dui semper. Sit placerat sed et ornare faucibus
            egestas sit nisl, diam.
            <cite>Leslie Webb</cite>
          </blockquote>

          <blockquote>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Maecenas sed diam
            eget risus varius blandit sit amet non magna.
            <cite>Bildad the Shuhite</cite>
          </blockquote>

          <h3>Mattis risus ultricies</h3>
          <p>
            Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi
            porta gravida at eget metus.
          </p>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus. Donec ullamcorper nulla non metus
            auctor fringilla. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>

          <h3>Top Contributors</h3>
          <p>Thanks goes to these wonderful people:</p>
          {hasProjectStats && (
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
                <a href={project.githubUrl} className="button button-primary">
                  <img src={iconGitHubWhite} alt="GitHub logo" />
                  Star
                </a>
                <a href={project.githubUrl} className="button button-secondary">
                  View GitHub Repo
                </a>
              </div>
              <small className={styles.callToActionSupport}>
                Need help with the project?{' '}
                <a href="#">Try the support thread</a>
              </small>
            </div>
            <div className={styles.callToActionCategorySpecification}>
              <h5 className={styles.callToActionCategory}>
                <Link to="/categories">New Relic One Category</Link>
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
              <div className={styles.projectScreenshotsContainer}>
                {renderScreenshots(project, projectStats)}
              </div>
            </>
          )}

          {hasProjectStats && (
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

                  {hasProjectStats && renderIssues(project, projectStats)}
                  {!hasProjectStats && renderEmptyIssues()}
                </>
              )}
            </>
          )}

          {!hasProjectStats && renderEmptyProjectStats()}
        </aside>
      </div>
    </Layout>
  );
};
ProjectPage.propTypes = {
  data: PropTypes.object
};

export default ProjectPage;
