import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';

const withDarkMode = (ComponentToWrap) => (props) => {
  const [isClient, setIsClient] = useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const darkModeStatus = isClient ? localStorage.getItem('darkMode') : false;
  const darkMode = useDarkMode(darkModeStatus);

  if (!isClient) {
    return null;
  }

  return <ComponentToWrap {...props} darkMode={darkMode} />;
};

export default withDarkMode;
