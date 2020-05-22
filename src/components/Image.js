import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const [currentSrc, setCurrentSrc] = useState(props.src);
  const [errored, setErrored] = useState(false);

  const onError = () => {
    if (!errored) {
      setCurrentSrc(props.fallbackSrc);
      setErrored(true);
    }
  };

  const { src, fallbackSrc, ...remainingProps } = props;

  return (
    // Keep in mind that sometimes `null` is provided as the value for project icons
    <img
      src={currentSrc !== null ? currentSrc : 'do me a favor and fail'}
      onError={onError}
      {...remainingProps}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string
};

export default Image;
