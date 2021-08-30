import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import * as styles from './ContributorListing.module.scss';

const ContributorListing = ({ contributors, project }) => {
  const renderContributorItems = () => {
    const sortedContributors = contributors
      .filter((contributor) => contributor.login.indexOf('-bot') === -1)
      .sort((a, b) => (b.contributions > a.contributions ? 1 : -1));

    const navigate = (url) => window.open(url, '_blank');
    const contributorItem = sortedContributors.map((contributor, i) => {
      if (i < 4) {
        return (
          <li className={styles.contributorItem} key={contributor.id}>
            <div
              className={styles.contributorItemPrimaryContent}
              onClick={() => navigate(contributor.htmlUrl)}
            >
              <img
                src={contributor.avatarUrl}
                alt={`avatar of ${contributor.name}`}
                className={styles.contributorAvatar}
              />
              <h4 className={styles.contributorName}>
                <a
                  href={contributor.htmlUrl}
                  className={styles.contributorNameLink}
                  target="__blank"
                  rel="noopener noreferrer"
                  css={css`
                    text-decoration: none;
                  `}
                >
                  {contributor.login}
                </a>
              </h4>
              <h6 className={styles.contributorContributions}>
                <a
                  href={`${project.githubUrl}/graphs/contributors`}
                  rel="noopener noreferrer"
                  target="__blank"
                  css={css`
                    text-decoration: none;
                  `}
                >
                  {contributor.contributions} commits
                </a>
              </h6>
            </div>
          </li>
        );
      } else {
        return null;
      }
    });

    return contributorItem;
  };

  return (
    <ul className={styles.contributorsContainer}>{renderContributorItems()}</ul>
  );
};

ContributorListing.propTypes = {
  contributors: PropTypes.array,
  project: PropTypes.object,
};

export default ContributorListing;
