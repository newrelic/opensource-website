import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <img
      src={currentSrc !== null && currentSrc !== '' ? currentSrc : fallbackSrc}
      onError={onError}
      {...remainingProps}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string.isRequired,
};

export default Image;
