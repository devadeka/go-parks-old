import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../../../static/go-parks-logo.png';

import {
  AppVersion,
  SplashScreenPage,
  SplashLogo,
  SplashStatus,
} from './styled';

const ver = '1.43';

const SplashScreen = () => {
  const [updatingStatus, setUpdatingStatus] = useState(0);

  const maxCount = 7;

  useEffect(() => {
    const updateInterval = setInterval(
      () => setUpdatingStatus(Math.min(updatingStatus + 1, maxCount)),
      1000
    );

    return () => clearInterval(updateInterval);
  });

  console.log(updatingStatus);

  return (
    <SplashScreenPage>
      <SplashLogo src={logo} alt="GoParks Logo" />
      <AppVersion>Version: v{ver}</AppVersion>
      {updatingStatus > maxCount - 3 ? (
        <SplashStatus>Update Complete</SplashStatus>
      ) : (
        <SplashStatus>Updating{'.'.repeat(updatingStatus % 4)}</SplashStatus>
      )}
      {updatingStatus > maxCount - 1 ? <Redirect to="/park_select" /> : ''}
    </SplashScreenPage>
  );
};

export default SplashScreen;
