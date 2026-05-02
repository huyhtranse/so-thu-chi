# 🔐 Environment Configuration Setup

## Overview
Environment files contain sensitive Azure AD credentials and should **NEVER** be committed to version control.

## Setup Instructions

### 1. **Get Azure AD Credentials**
- Go to [Azure Portal](https://portal.azure.com)
- Navigate to: **Azure Active Directory → App registrations**
- Find your app → Copy:
  - **Application (client) ID** → `clientId`
  - **Directory (tenant) ID** → Replace `YOUR_TENANT_ID` in authority

### 2. **Create Environment Files**
```bash
# Development
cp src/environments/environment.development.example.ts src/environments/environment.development.ts

# Production
cp src/environments/environment.example.ts src/environments/environment.ts
```

### 3. **Fill in Credentials**
Edit both files with your Azure AD values:

**environment.development.ts:**
```typescript
export const environment = {
  production: false,
  auth: {
    clientId: 'YOUR_ACTUAL_DEV_CLIENT_ID',  // ← Replace
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID',  // ← Replace
    redirectUri: 'http://localhost:4200',
  },
};
```

**environment.ts:**
```typescript
export const environment = {
  production: true,
  auth: {
    clientId: 'YOUR_ACTUAL_PROD_CLIENT_ID',  // ← Replace
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID',  // ← Replace
    redirectUri: 'https://yourdomain.com',  // ← Replace
  },
};
```

### 4. **Gitignore Configuration**
Environment files are **already ignored** in `.gitignore`:
```
src/environments/environment.ts
src/environments/environment.development.ts
src/environments/environment.*.ts
!src/environments/environment.example.ts
!src/environments/environment.development.example.ts
```

## ✅ Security Checklist
- [ ] Never commit `environment.ts` or `environment.development.ts`
- [ ] Use template files (`*.example.ts`) only
- [ ] Store credentials in environment variables or secure vault
- [ ] Rotate credentials periodically
- [ ] Use different credentials for dev/prod

## 🔒 Alternative: Environment Variables
For better security, use environment variables:

```typescript
// environment.development.ts
export const environment = {
  production: false,
  auth: {
    clientId: process.env['AZURE_CLIENT_ID'] || 'FALLBACK_ID',
    authority: process.env['AZURE_AUTHORITY'] || 'https://login.microsoftonline.com/TENANT',
    redirectUri: 'http://localhost:4200',
  },
};
```

Then set env vars before running:
```bash
export AZURE_CLIENT_ID="your-client-id"
export AZURE_AUTHORITY="https://login.microsoftonline.com/tenant-id"
ng serve
```

## ⚠️ If You Accidentally Committed Credentials
```bash
# Remove from git history (DANGER - will rewrite history)
git rm --cached src/environments/environment*.ts
git commit --amend
git push --force-with-lease

# THEN rotate credentials in Azure AD immediately!
```

---

**Questions?** See [Angular Environment Configuration](https://angular.io/guide/build#configuring-application-environments)
