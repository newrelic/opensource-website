import React from 'react';
import { Moon, Sun } from 'react-feather';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const currentDarkModeStatus = localStorage.getItem('darkMode');
  const darkMode =
    currentDarkModeStatus !== null
      ? useDarkMode(currentDarkModeStatus)
      : useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      {darkMode.value ? (
        <Sun
          size={15}
          color={darkMode.value ? `#CEDEDE` : `#000d0d`}
          onClick={darkMode.disable}
        />
      ) : (
        <Moon
          size={15}
          color={darkMode.value ? `#CEDEDE` : `#000d0d`}
          onClick={darkMode.enable}
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
