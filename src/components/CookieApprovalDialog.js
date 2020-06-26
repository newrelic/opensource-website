import React from 'react';
import PropTypes from 'prop-types';
import styles from './CookieApprovalDialog.module.scss';
import withDarkMode from './withDarkMode';
import Cookies from 'js-cookie';

class CookieApprovalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieSet: Cookies.get('newrelic-gdpr-consent') !== undefined
    };
    this.writeCookies = this.writeCookies.bind(this);
  }

  writeCookies(answer) {
    Cookies.set('newrelic-gdpr-consent', !!answer, {
      expires: 365
    });
    // console.debug(Cookies.get('newrelic-gdpr-consent'));
    this.setState({ cookieSet: true });
  }

  render() {
    const { className, darkMode } = this.props; // eslint-disable-line no-unused-vars
    // console.debug(this.state.cookieSet);
    return (
      !this.state.cookieSet && (
        <div className={`${styles.container} ${className || ''}`}>
          <div className={styles.content}>
            {/* <X className={styles.buttonClose} size={18} /> */}
            <div className={styles.primaryContent}>
              <h4 className={styles.heading}>
                This site uses tracking cookies 🍪
              </h4>
              <p className={styles.description}>
                We rely on tracking instrumentation to deliver an optimal
                experience across our sites. If you consent to our cookies,
                please click “OK”.
              </p>
            </div>
            <div className={styles.ctaContainer}>
              <button
                className={`button ${styles.approvalButton}`}
                type="button"
                onClick={() => {
                  this.writeCookies(true);
                }}
              >
                OK
              </button>
              <button
                className={`button button-tertiary ${styles.ignoreButton}`}
                type="button"
                onClick={() => {
                  this.writeCookies(false);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

CookieApprovalDialog.propTypes = {
  className: PropTypes.string,
  darkMode: PropTypes.object
};

export default withDarkMode(CookieApprovalDialog);
