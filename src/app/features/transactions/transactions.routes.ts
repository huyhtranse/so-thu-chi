import { Routes } from '@angular/router';

export const TRANSACTIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/transaction-history-page/transaction-history-page').then(
        m => m.TransactionHistoryPage
      )
  }
];
