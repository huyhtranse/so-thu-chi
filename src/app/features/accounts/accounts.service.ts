import { Injectable } from '@angular/core';

export interface Account {
  id: string;
  name: string;
  balance: number;
  status: 'active' | 'inactive';
  type: 'savings' | 'checking' | 'investment';
  accountType: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  // Mock data
  private mockAccounts: Account[] = [
    {
      id: '1',
      name: 'ACB',
      balance: 0,
      status: 'active',
      type: 'savings',
      accountType: 'Tài khoản ngân hàng',
      icon: 'account_balance'
    },
    {
      id: '2',
      name: 'Vị',
      balance: 2864051,
      status: 'active',
      type: 'checking',
      accountType: 'Tiền mặt',
      icon: 'account_balance_wallet'
    },
    {
      id: '3',
      name: 'Agribank',
      balance: 0,
      status: 'inactive',
      type: 'savings',
      accountType: 'Tài khoản ngân hàng',
      icon: 'account_balance'
    },
    {
      id: '4',
      name: 'cash',
      balance: 2700000,
      status: 'inactive',
      type: 'checking',
      accountType: 'Tiền mặt',
      icon: 'account_balance_wallet'
    },
    {
      id: '5',
      name: 'Lị xí',
      balance: 0,
      status: 'inactive',
      type: 'investment',
      accountType: 'Tài khoản đầu tư',
      icon: 'trending_up'
    },
    {
      id: '6',
      name: 'Tk ACB',
      balance: 0,
      status: 'inactive',
      type: 'savings',
      accountType: 'Tài khoản ngân hàng',
      icon: 'account_balance'
    },
    {
      id: '7',
      name: 'urbox',
      balance: 6300000,
      status: 'inactive',
      type: 'investment',
      accountType: 'Khác',
      icon: 'folder'
    },
    {
      id: '8',
      name: 'Zalopay',
      balance: 0,
      status: 'inactive',
      type: 'checking',
      accountType: 'Ví điện tử',
      icon: 'account_balance_wallet'
    }
  ];

  getAccounts() {
    return this.mockAccounts;
  }

  getTotalBalance(): number {
    return this.mockAccounts.reduce((sum, acc) => sum + acc.balance, 0);
  }

  filterAccounts(filters: any): Account[] {
    return this.mockAccounts.filter(account => {
      if (filters.search && !account.name.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      if (filters.accountType && filters.accountType !== 'all' && account.accountType !== filters.accountType) {
        return false;
      }
      if (filters.status && filters.status !== 'all' && account.status !== filters.status) {
        return false;
      }
      return true;
    });
  }
}
