import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun } from 'react-feather';
import withDarkMode from './withDarkMode';

const DarkModeToggle = ({ darkMode }) => {
  return (
    <div className="dark-mode-toggle">
      {darkMode.value ? (
        <Sun
          size={15}
          color={darkMode.value ? `#CEDEDE` : `#000d0d`}
          fill={darkMode.value ? `#CEDEDE` : `#000d0d`}
          onClick={darkMode.disable}
        />
      ) : (
        <Moon
          size={15}
          stroke="rgba(0,0,0, 0)"
          fill={darkMode.value ? `#CEDEDE` : `#000d0d`}
          onClick={darkMode.enable}
        />
      )}
    </div>
  );
};
DarkModeToggle.propTypes = {
  darkMode: PropTypes.object
};

export default withDarkMode(DarkModeToggle);
