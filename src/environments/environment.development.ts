export const environment = {
  production: false,
  auth: {
    clientId: '', // Replace with your Azure AD app ID
    authority: 'https://login.microsoftonline.com/common', // Replace with your tenant ID
    redirectUri: 'http://localhost:4200', // Development redirect URI
  },
};
