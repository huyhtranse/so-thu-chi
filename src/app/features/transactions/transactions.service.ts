import { Injectable } from '@angular/core';

export interface Transaction {
  id: string;
  category: string;
  categoryIcon: string;
  amount: number;
  account: string;
  accountIcon: string;
  description: string;
  type: 'income' | 'expense';
}

export interface TransactionGroup {
  date: string;
  dateLabel: string;
  totalAmount: number;
  transactions: Transaction[];
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  // Mock data
  private mockTransactions: Transaction[] = [
    // 01/05/2026 (Today)
    {
      id: '1',
      category: 'Housing',
      categoryIcon: 'home',
      amount: 2319000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: '--',
      type: 'expense'
    },
    {
      id: '2',
      category: 'Drinks',
      categoryIcon: 'local_bar',
      amount: 26000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: 'cf 5 áng',
      type: 'expense'
    },
    // 30/04/2026
    {
      id: '3',
      category: 'Moving',
      categoryIcon: 'local_shipping',
      amount: 186000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: 'xe futa',
      type: 'expense'
    },
    {
      id: '4',
      category: 'Drinks',
      categoryIcon: 'local_bar',
      amount: 15000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: 'cf sáng',
      type: 'expense'
    },
    // 29/04/2026
    {
      id: '5',
      category: 'Snack',
      categoryIcon: 'fastfood',
      amount: 39000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: 'cf trưa',
      type: 'expense'
    },
    {
      id: '6',
      category: 'Learning',
      categoryIcon: 'school',
      amount: 474000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: 'copilot edu',
      type: 'expense'
    },
    {
      id: '7',
      category: 'Snack',
      categoryIcon: 'fastfood',
      amount: 20000,
      account: 'Ví',
      accountIcon: 'account_balance_wallet',
      description: 'xôi sáng',
      type: 'expense'
    }
  ];

  getTransactions(): TransactionGroup[] {
    const grouped = this.groupByDate(this.mockTransactions);
    return grouped.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  filterTransactions(filters: {
    search?: string;
    timeRange?: string;
    sortBy?: string;
  }): TransactionGroup[] {
    let filtered = [...this.mockTransactions];

    if (filters.search) {
      const query = filters.search.toLowerCase();
      filtered = filtered.filter(
        t =>
          t.category.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query)
      );
    }

    const grouped = this.groupByDate(filtered);
    return grouped.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getTotalIncome(): number {
    return this.mockTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  getTotalExpense(): number {
    return this.mockTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  private groupByDate(transactions: Transaction[]): TransactionGroup[] {
    const grouped: { [key: string]: TransactionGroup } = {};

    transactions.forEach(transaction => {
      const date = this.getDateString(transaction.id);
      if (!grouped[date]) {
        grouped[date] = {
          date,
          dateLabel: this.getDateLabel(date),
          totalAmount: 0,
          transactions: []
        };
      }
      grouped[date].transactions.push(transaction);
      grouped[date].totalAmount += transaction.amount;
    });

    return Object.values(grouped);
  }

  private getDateString(id: string): string {
    // Mock: Generate dates based on transaction id
    const today = new Date();
    const daysAgo = parseInt(id) - 1;
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
  }

  private getDateLabel(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.getTime() === today.getTime()) {
      return 'Hôm nay';
    } else if (date.getTime() === yesterday.getTime()) {
      return 'Hôm qua';
    }

    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}
