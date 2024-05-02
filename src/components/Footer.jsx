import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';

import {
  footerLogo, svgSprite, isFooterDark, footerLinks, footerIcons, displayCreatedByBlock,
} from '@edx/brand'; // eslint-disable-line import/no-unresolved
import Zendesk from 'react-zendesk';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import messages from './Footer.messages';

class SiteFooter extends React.PureComponent {
  render() {
    const { intl } = this.props;

    return (
      <footer
        role="contentinfo"
        className="footer"
      >
        <div className="holder">
          <NavLinks footerLinks={footerLinks} />
          <div className="footer-holder">
            {displayCreatedByBlock && (
              <div className="footer-support">
                <a
                  className="footer-support__edx"
                  href="https://open.edx.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
                >
                  <img
                    src={
                      isFooterDark
                        ? 'https://files.edx.org/openedx-logos/open-edx-logo-tag-dark.png'
                        : 'https://files.edx.org/openedx-logos/open-edx-logo-tag.png'
                    }
                    alt={intl.formatMessage(messages['footer.logo.altText'])}
                  />
                </a>
                <a
                  className="footer-support__rg"
                  href="https://raccoongang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  by Raccoon Gang
                  <svg className={
                    isFooterDark
                      ? 'footer-support__logo'
                      : 'footer-support__logo footer-support__logo--is-modified'
                    }
                  >
                    <use href={`${svgSprite}#logoRaccoon`} />
                  </svg>
                </a>
              </div>
            )}
            <SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />
            <div className="footer-logo">
              <a href={`${getConfig().LMS_BASE_URL}/`}>
                <img
                  src={footerLogo}
                  alt={intl.formatMessage(messages['footer.logo.altText'])}
                />
              </a>
            </div>
          </div>
        </div>
        {getConfig().ZENDESK_KEY && <Zendesk defer zendeskKey={getConfig().ZENDESK_KEY} />}
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SiteFooter);
