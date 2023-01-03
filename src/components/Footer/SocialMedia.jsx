import React from 'react';
import fbSvg from '../../icons/social/fb.svg';
import twitterSvg from '../../icons/social/twitter.svg';
import linkedInSvg from '../../icons/social/linkedIn.svg';

const SocialMedia = () => {
  return (
    <div className="social-media-block footer-block">
      <h6>Social media</h6>
      <div className="social-media">
        <ul>
          <li>
            <a href="https://twitter.com/home">
              <img src={twitterSvg} alt=""/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={fbSvg} alt=""/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <img src={linkedInSvg} alt=""/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
