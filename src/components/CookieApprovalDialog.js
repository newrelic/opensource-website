import React from 'react';
import PropTypes from 'prop-types';
import styles from './CookieApprovalDialog.module.scss';
import withDarkMode from './withDarkMode';

const CookieApprovalDialog = ({ className, darkMode }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.content}>
        {/* <X className={styles.buttonClose} size={18} /> */}
        <div className={styles.primaryContent}>
          <h4 className={styles.heading}>This site uses cookies 🍪</h4>
          <p className={styles.description}>
            We rely on cookies to play videos, remember your preferences, and
            analyze our website traffic. You consent to our cookies if you click
            “OK”.
          </p>
        </div>
        <div className={styles.ctaContainer}>
          <button className={`button ${styles.approvalButton}`} type="button">
            OK
          </button>
          <button
            className={`button button-tertiary ${styles.ignoreButton}`}
            type="button"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

CookieApprovalDialog.propTypes = {
  className: PropTypes.string,
  darkMode: PropTypes.object
};

export default withDarkMode(CookieApprovalDialog);
