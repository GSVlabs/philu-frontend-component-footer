function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';
import { footerLogo, svgSprite, isFooterDark, footerLinks, footerIcons, displayCreatedByBlock } from '@edx/brand'; // eslint-disable-line import/no-unresolved
import Zendesk from 'react-zendesk';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import messages from './Footer.messages';
var SiteFooter = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SiteFooter, _React$PureComponent);
  var _super = _createSuper(SiteFooter);
  function SiteFooter() {
    _classCallCheck(this, SiteFooter);
    return _super.apply(this, arguments);
  }
  _createClass(SiteFooter, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      return /*#__PURE__*/React.createElement("footer", {
        role: "contentinfo",
        className: "footer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "holder"
      }, /*#__PURE__*/React.createElement(NavLinks, {
        footerLinks: footerLinks
      }), /*#__PURE__*/React.createElement("div", {
        className: "footer-holder"
      }, displayCreatedByBlock && /*#__PURE__*/React.createElement("div", {
        className: "footer-support"
      }, /*#__PURE__*/React.createElement("a", {
        className: "footer-support__edx",
        href: "https://open.edx.org",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel'])
      }, /*#__PURE__*/React.createElement("img", {
        src: isFooterDark ? 'https://files.edx.org/openedx-logos/open-edx-logo-tag-dark.png' : 'https://files.edx.org/openedx-logos/open-edx-logo-tag.png',
        alt: intl.formatMessage(messages['footer.logo.altText'])
      })), /*#__PURE__*/React.createElement("a", {
        className: "footer-support__rg",
        href: "https://raccoongang.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "by Raccoon Gang", /*#__PURE__*/React.createElement("svg", {
        className: isFooterDark ? 'footer-support__logo' : 'footer-support__logo footer-support__logo--is-modified'
      }, /*#__PURE__*/React.createElement("use", {
        href: "".concat(svgSprite, "#logoRaccoon")
      })))), /*#__PURE__*/React.createElement(SocialLinks, {
        footerIcons: footerIcons,
        svgSprite: svgSprite
      }), /*#__PURE__*/React.createElement("div", {
        className: "footer-logo"
      }, /*#__PURE__*/React.createElement("a", {
        href: "".concat(getConfig().LMS_BASE_URL, "/")
      }, /*#__PURE__*/React.createElement("img", {
        src: footerLogo,
        alt: intl.formatMessage(messages['footer.logo.altText'])
      }))))), getConfig().ZENDESK_KEY && /*#__PURE__*/React.createElement(Zendesk, {
        defer: true,
        zendeskKey: getConfig().ZENDESK_KEY
      }));
    }
  }]);
  return SiteFooter;
}(React.PureComponent);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(SiteFooter);
//# sourceMappingURL=Footer.js.map