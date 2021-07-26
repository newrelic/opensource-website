import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import isLocalStorageAvailable from '../utils/isLocalStorageAvailable';

const withDarkMode = (ComponentToWrap) => (props) => {
  const [isClient, setIsClient] = useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  const isDarkDefault = false;
  const checkLocalStorage = isLocalStorageAvailable();
  const darkModeOptions = checkLocalStorage ? {} : { storageProvider: false };
  const darkMode = useDarkMode(isDarkDefault, darkModeOptions);

  if (!isClient) {
    return null;
  }

  return <ComponentToWrap {...props} darkMode={darkMode} />;
};

export default withDarkMode;
