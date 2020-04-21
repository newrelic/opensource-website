import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContributorListing.module.scss';

const ContributorListing = data => {
  const emojiKey = role => {
    switch (role) {
      case 'ally':
        return (
          <span role="img" aria-label={role}>
            ♿️
          </span>
        );
      case 'bug':
        return (
          <span role="img" aria-label={role}>
            🐛
          </span>
        );
      case 'blog':
        return (
          <span role="img" aria-label={role}>
            📝
          </span>
        );
      case 'business':
        return (
          <span role="img" aria-label={role}>
            💼
          </span>
        );
      case 'code':
        return (
          <span role="img" aria-label={role}>
            💻
          </span>
        );
      case 'content':
        return (
          <span role="img" aria-label={role}>
            🖋
          </span>
        );
      case 'data':
        return (
          <span role="img" aria-label={role}>
            🔣
          </span>
        );
      case 'doc':
        return (
          <span role="img" aria-label={role}>
            📖
          </span>
        );
      case 'design':
        return (
          <span role="img" aria-label={role}>
            🎨
          </span>
        );
      case 'example':
        return (
          <span role="img" aria-label={role}>
            💡
          </span>
        );
      case 'eventOrganizing':
        return (
          <span role="img" aria-label={role}>
            📋
          </span>
        );
      case 'financial':
        return (
          <span role="img" aria-label={role}>
            💵
          </span>
        );
      case 'fundingFinding':
        return (
          <span role="img" aria-label={role}>
            🔍
          </span>
        );
      case 'ideas':
        return (
          <span role="img" aria-label={role}>
            🤔
          </span>
        );
      case 'infra':
        return (
          <span role="img" aria-label={role}>
            🚇
          </span>
        );
      case 'maintenance':
        return (
          <span role="img" aria-label={role}>
            🚧
          </span>
        );
      case 'platform':
        return (
          <span role="img" aria-label={role}>
            📦
          </span>
        );
      case 'plugin':
        return (
          <span role="img" aria-label={role}>
            🔌
          </span>
        );
      case 'projectManagement':
        return (
          <span role="img" aria-label={role}>
            📆
          </span>
        );
      case 'question':
        return (
          <span role="img" aria-label={role}>
            💬
          </span>
        );
      case 'review':
        return (
          <span role="img" aria-label={role}>
            👀
          </span>
        );
      case 'security':
        return (
          <span role="img" aria-label={role}>
            🛡️
          </span>
        );
      case 'tool':
        return (
          <span role="img" aria-label={role}>
            🔧
          </span>
        );
      case 'translation':
        return (
          <span role="img" aria-label={role}>
            🌍
          </span>
        );
      case 'test':
        return (
          <span role="img" aria-label={role}>
            ⚠️
          </span>
        );
      case 'tutorial':
        return (
          <span role="img" aria-label={role}>
            ✅
          </span>
        );
      case 'talk':
        return (
          <span role="img" aria-label={role}>
            📢
          </span>
        );
      case 'userTesting':
        return (
          <span role="img" aria-label={role}>
            📓
          </span>
        );
      case 'video':
        return (
          <span role="img" aria-label={role}>
            📹
          </span>
        );
      default:
        return (
          <span role="img" aria-label={role}>
            👋🏽
          </span>
        );
    }
  };

  const renderContributorItems = data => {
    const contributorItem = data.data.map(contributor => {
      // const renderRolesEmojis = contributor.roles.map(role => (
      //   <li className={styles.contributor-role">{emojiKey(role)}</li>
      // ))

      return (
        <li className={styles.contributorItem} key={contributor.id}>
          <div className={styles.contributorItemPrimaryContent}>
            <img
              src={contributor.avatarUrl}
              alt={`avatar of ${contributor.name}`}
              className={styles.contributorAvatar}
            />
            <h4 className={styles.contributorName}>
              <a
                href={contributor.htmlUrl}
                className={styles.contributorNameLink}
              >
                {contributor.name}
              </a>
            </h4>
            <h6 className={styles.contributorUsername}>{contributor.login}</h6>
          </div>
        </li>
      );
    });

    return contributorItem;
  };

  return (
    <ul className={styles.contributorsContainer}>
      {renderContributorItems(data)}
    </ul>
  );
};

ContributorListing.propTypes = {
  data: PropTypes.array
};

export default ContributorListing;
