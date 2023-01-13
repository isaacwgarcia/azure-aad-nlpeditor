import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../authConfig';

/**
 * Renders a div for logging
 */
export const SignIn = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return <div onClick={() => handleLogin('redirect')}>Sign In</div>;
};
/**
 * Renders a div for logout
 */
export const SignOut = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: '/',
    });
  };

  return <div onClick={() => handleLogout('redirect')}>Sign out</div>;
};
