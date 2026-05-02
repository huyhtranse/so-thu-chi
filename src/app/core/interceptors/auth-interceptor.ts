// auth.interceptor.ts

import {
  HttpInterceptorFn
} from '@angular/common/http';

import {
  inject
} from '@angular/core';

import {
  MsalService
} from '@azure/msal-angular';

import {
  from
} from 'rxjs';

import {
  switchMap
} from 'rxjs/operators';

const protectedResourceMap = [
  'http://localhost:3000/api'
];

export const authInterceptor: HttpInterceptorFn = (
  req,
  next
) => {

  const msalService = inject(MsalService);

  const isProtected =
    protectedResourceMap.some(url =>
      req.url.startsWith(url)
    );

  if (!isProtected) {
    return next(req);
  }

  const account =
    msalService.instance.getActiveAccount();

  if (!account) {
    return next(req);
  }

  return from(
    msalService.instance.acquireTokenSilent({
      account,
      scopes: ['User.Read']
    })
  ).pipe(
    switchMap((result) => {

      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${result.accessToken}`
        }
      });

      return next(authReq);
    })
  );
};