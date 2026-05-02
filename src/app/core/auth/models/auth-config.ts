import { MsalGuardConfiguration } from '@azure/msal-angular';
import { Configuration, BrowserCacheLocation, InteractionType } from '@azure/msal-browser';
import { environment } from '../../../../environments/environment.development';

export const msalConfig: Configuration = {
  auth: {
    clientId: environment.auth.clientId,
    authority: environment.auth.authority,
    redirectUri: environment.auth.redirectUri
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
  }
};

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect, // Chế độ Redirect mặc định
    authRequest: {
      scopes: ['user.read']

    },
    loginFailedRoute: '/login-failed' 
  };
}