import React from 'react';
import PropTypes from 'prop-types';

const NR1AppGettingStartedContent = ({ project: p }) => {
  return (
    <>
      <p>
        {p.title} is available for installation via the{' '}
        <a
          href="https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/build-new-relic-one/discover-manage-applications-new-relic-one-catalog"
          target="__blank"
        >
          New Relic One Catalog
        </a>
        .
      </p>
      <p>
        To fork and enhance this New Relic One application, follow the{' '}
        <a href={`${p.githubUrl}#getting-started`}>
          Getting Started instructions in the README
        </a>
        .
      </p>
    </>
  );
};

NR1AppGettingStartedContent.propTypes = {
  project: PropTypes.object
};

export default NR1AppGettingStartedContent;
