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
    const currentEnvironment =
      process.env.ENV || process.env.NODE_ENV || 'development';
    const options = { expires: 365 };
    if (currentEnvironment !== 'development') {
      options.domain = 'newrelic.com';
    }
    Cookies.set('newrelic-gdpr-consent', !!answer, options);
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
              <h4 className={styles.heading}>This site uses cookies 🍪</h4>
              <p className={styles.description}>
                We use cookies and other similar technologies ("Cookies") on our
                websites and services to enhance your experience and to provide
                you with relevant content. By using our websites and services
                you are agreeing to the use of cookies. You can read more{' '}
                <a
                  href="https://newrelic.com/termsandconditions/cookie-policy"
                  target="__blank"
                >
                  here
                </a>
                . If you consent to our cookies, please click{' '}
                <strong>Yes</strong>.
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
                Yes
              </button>
              <button
                className={`button button-tertiary ${styles.ignoreButton}`}
                type="button"
                onClick={() => {
                  this.writeCookies(false);
                }}
              >
                No
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
