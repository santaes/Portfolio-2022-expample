import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://twitter.com/santa_knp'
          target='_blank'
          rel='noreferrer'
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href='https://www.instagram.com/santa_es/'
          target='_blank'
          rel='noreferrer'
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/oleksander.sukharyev.1'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/oleksander-sukharyev/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
