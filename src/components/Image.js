import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
import * as styles from '../pages/explore-projects.module.scss';

/*
 * Skip rendering <img> tags server-side, wait until the client-side has rehydrated the application (utilizing useEffect)
 * before attempting to load them, and if they fail to load, re-render with a fallback img
 *
 * If currentSrc is null or if we get an error when loading currentSrc utilize the provided fallbackSrc
 */
const Image = (props) => {
  const [currentSrc, setCurrentSrc] = useState(props.src);
  const [errored, setErrored] = useState(false);

  const [isClient, setIsClient] = useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (errored) {
      setCurrentSrc(props.fallbackSrc);
    }
  }, [props.fallbackSrc]);

  const onError = () => {
    if (!errored) {
      setCurrentSrc(props.fallbackSrc);
      setErrored(true);
    }
  };

  const { src, fallbackSrc, ...remainingProps } = props;

  if (!isClient) {
    return null;
  }

  return (
    <>
      {currentSrc ? (
        <img src={currentSrc} onError={onError} {...remainingProps} />
      ) : (
        <div {...remainingProps}>
          <Icon name="fe-box" size="70%" className={styles.fallbackIcon} />
        </div>
      )}
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string.isRequired,
};

export default Image;
