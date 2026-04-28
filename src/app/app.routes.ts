import { Routes } from '@angular/router';

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
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/pages/dashboard-home/dashboard-home').then(m => m.DashboardHome)
      }
    ]
    // Sau này bạn sẽ thêm AuthGuard ở đây để bảo vệ dashboard
    // canActivate: [AuthGuard]
  },

  // 4. Trang 404 (nếu có)
  { path: '**', redirectTo: 'login' }
];