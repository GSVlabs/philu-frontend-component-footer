import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
var NavLinks = function NavLinks(_ref) {
  var intl = _ref.intl,
    footerLinks = _ref.footerLinks;
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    className: "footer-nav-list"
  }, footerLinks.map(function (_ref2) {
    var message = _ref2.message,
      href = _ref2.href,
      targetBlank = _ref2.targetBlank;
    return /*#__PURE__*/React.createElement("li", {
      key: message,
      className: "footer-nav-list__item"
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      className: "footer-nav-list__link",
      target: targetBlank ? '_blank' : '_self'
    }, intl.formatMessage(message)));
  })));
};
NavLinks.propTypes = {
  intl: intlShape.isRequired,
  footerLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    message: PropTypes.object.isRequired,
    target_blank: PropTypes.bool.isRequired
  }))
};
NavLinks.defaultProps = {
  footerLinks: []
};
export default injectIntl(NavLinks);
//# sourceMappingURL=NavLinks.js.map