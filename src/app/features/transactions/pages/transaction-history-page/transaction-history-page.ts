import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';
import { TransactionsService, TransactionGroup } from '../../transactions.service';

@Component({
  selector: 'app-transaction-history-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MATERIAL_IMPORTS],
  templateUrl: './transaction-history-page.html',
  styleUrl: './transaction-history-page.scss'
})
export class TransactionHistoryPage implements OnInit {
  private transactionsService = inject(TransactionsService);

  // Signals
  transactionGroups = signal<TransactionGroup[]>([]);
  totalIncome = signal<number>(0);
  totalExpense = signal<number>(0);
  searchQuery = signal<string>('');
  timeRange = signal<string>('30');
  sortBy = signal<string>('latest');

  timeRangeOptions = [
    { value: '7', label: '7 ngày gần nhất' },
    { value: '30', label: '30 ngày gần nhất' },
    { value: '90', label: '90 ngày gần nhất' },
    { value: 'all', label: 'Tất cả' }
  ];

  sortOptions = [
    { value: 'latest', label: 'Mới nhất' },
    { value: 'oldest', label: 'Cũ nhất' },
    { value: 'amount-high', label: 'Số tiền cao nhất' },
    { value: 'amount-low', label: 'Số tiền thấp nhất' }
  ];

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    const groups = this.transactionsService.filterTransactions({
      search: this.searchQuery(),
      timeRange: this.timeRange(),
      sortBy: this.sortBy()
    });
    this.transactionGroups.set(groups);
    this.totalIncome.set(this.transactionsService.getTotalIncome());
    this.totalExpense.set(this.transactionsService.getTotalExpense());
  }

  onSearchChange() {
    this.loadTransactions();
  }

  onFilterChange() {
    this.loadTransactions();
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(value);
  }

  getTransactionColor(type: string): string {
    return type === 'income' ? 'accent' : 'warn';
  }
}
