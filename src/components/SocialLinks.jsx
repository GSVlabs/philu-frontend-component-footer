import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = ({ footerIcons, svgSprite }) => (
  <ul className="footer-social-list">
    {footerIcons.map(link => (
      <li key={link.title} className="footer-social-list__item">
        <a
          href={link.url}
          title={link.title}
          rel="noopener noreferrer"
          target="_blank"
          className="footer-social-list__link"
        >
          <svg viewBox="0 0 35 35" className="footer-social-list__svg">
            <use href={`${svgSprite}#${link.icon}`} />
          </svg>
        </a>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  footerIcons: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  svgSprite: PropTypes.string.isRequired,
};

export default SocialLinks;
