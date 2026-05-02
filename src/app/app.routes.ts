import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  // 1. Khi người dùng vào địa chỉ trang web mặc định, điều hướng ngay sang /login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Load component feature Auth (chứa màn hình login của bạn)
  {
    path: 'login',
    loadComponent: () => import('./features/auth/page/login/login').then(m => m.Login)
  },

  // 3. Dashboard wrapped in MainLayout
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    canActivate: [MsalGuard], // Bảo vệ route này
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/pages/dashboard-home/dashboard-home').then(m => m.DashboardHome)
      }
    ],
  },

  // 4. Accounts feature
  {
    path: 'accounts',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    canActivate: [MsalGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/accounts/accounts.routes').then(m => m.ACCOUNTS_ROUTES)
      }
    ]
  },

  // 5. Transactions feature
  {
    path: 'transactions',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    canActivate: [MsalGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/transactions/transactions.routes').then(m => m.TRANSACTIONS_ROUTES)
      }
    ]
  },

  // 6. Trang 404 (nếu có)
  { path: '**', redirectTo: 'login' }
];