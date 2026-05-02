export const environment = {
  production: true,
  auth: {
    clientId: 'YOUR_CLIENT_ID', // Replace with your Azure AD app ID
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Replace with your tenant ID
    redirectUri: 'https://yourdomain.com', // Production redirect URI
  },
};
