import React from 'react';
import { Redirect } from 'expo-router';
import GoogleIcon from '../assets/social_media_icons/google_icon.svg';
import AppleIcon from '../assets/social_media_icons/apple_icon.svg';
import FbIcon from '../assets/social_media_icons/fb_icon.svg';

export default function App() {
  return (
    <Redirect href={"/EmergencyButton"}/>
  );
}