import React from 'react';
import PropTypes from 'prop-types';
var SocialLinks = function SocialLinks(_ref) {
  var footerIcons = _ref.footerIcons,
    svgSprite = _ref.svgSprite;
  return /*#__PURE__*/React.createElement("ul", {
    className: "footer-social-list"
  }, footerIcons.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      key: link.title,
      className: "footer-social-list__item"
    }, /*#__PURE__*/React.createElement("a", {
      href: link.url,
      title: link.title,
      rel: "noopener noreferrer",
      target: "_blank",
      className: "footer-social-list__link"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 35 35",
      className: "footer-social-list__svg"
    }, /*#__PURE__*/React.createElement("use", {
      href: "".concat(svgSprite, "#").concat(link.icon)
    }))));
  }));
};
SocialLinks.propTypes = {
  footerIcons: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })).isRequired,
  svgSprite: PropTypes.string.isRequired
};
export default SocialLinks;
//# sourceMappingURL=SocialLinks.js.map