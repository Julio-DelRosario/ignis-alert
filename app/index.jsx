import React from 'react';
import GoogleIcon from '../assets/social_media_icons/google_icon.svg';
import AppleIcon from '../assets/social_media_icons/apple_icon.svg';
import FbIcon from '../assets/social_media_icons/fb_icon.svg';
import Login from './Login';

export default function App() {
  return (
    <Login
      GoogleIcon={GoogleIcon}
      AppleIcon={AppleIcon}
      FbIcon={FbIcon}
    />
  );
}