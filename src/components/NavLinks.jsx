import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

const NavLinks = ({ intl, footerLinks }) => (
  <nav>
    <ul className="footer-nav-list">
      {footerLinks.map(({ message, href, targetBlank }) => (
        <li key={href} className="footer-nav-list__item">
          <a
            href={href}
            className="footer-nav-list__link"
            rel={targetBlank ? 'noopener noreferrer' : ''}
            target={targetBlank ? '_blank' : '_self'}
          >
            {intl.formatMessage(message)}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

NavLinks.propTypes = {
  intl: intlShape.isRequired,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      message: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
      target_blank: PropTypes.bool,
    }),
  ),
};

NavLinks.defaultProps = {
  footerLinks: [],
};

export default injectIntl(NavLinks);
