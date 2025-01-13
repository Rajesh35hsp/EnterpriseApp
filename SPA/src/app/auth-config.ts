
import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '41fb469e-b7e8-4331-b812-aac6e2e97ed6', // This is the ONLY mandatory field that you need to supply.
    authority: 'https://login.microsoftonline.com/bafe88b8-b07a-4901-b3d8-7a59c9eccea6', // Replace the placeholder with your tenant subdomain
    redirectUri: '/', // Points to window.location.origin by default. You must register this URI on Microsoft Entra admin center/App Registration.
    postLogoutRedirectUri: '/', // Points to window.location.origin by default.
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: [],
};
