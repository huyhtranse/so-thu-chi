import { Component, OnInit, signal, computed, inject, effect, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';
import { AccountsService, Account } from '../../accounts.service';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-account-list-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MATERIAL_IMPORTS
  ],
  templateUrl: './account-list-page.html',
  styleUrl: './account-list-page.scss'
})
export class AccountListPage implements OnInit {
  private accountsService = inject(AccountsService);

  // Signals
  accounts = signal<Account[]>([]);
  totalBalance = signal<number>(0);
  
  // Filter signals
  searchQuery = signal<string>('');
  selectedAccountType = signal<string>('all');
  selectedStatus = signal<string>('all');

  // Pagination
  pageSize = signal<number>(10);
  pageIndex = signal<number>(0);

  // Tab selection
  selectedTab = signal<number>(0);

  // Mat Table Data Source
  dataSource = new MatTableDataSource<Account>([]);

  constructor() {
    // Update dataSource whenever paginatedAccounts changes
    effect(() => {
      this.dataSource.data = this.paginatedAccounts();
    });
  }

  // Computed values
  filteredAccounts = computed(() => {
    const filtered = this.accountsService.filterAccounts({
      search: this.searchQuery(),
      accountType: this.selectedAccountType() === 'all' ? null : this.selectedAccountType(),
      status: this.selectedStatus() === 'all' ? null : this.selectedStatus()
    });
    return filtered;
  });

  paginatedAccounts = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredAccounts().slice(start, end);
  });

  totalItems = computed(() => this.filteredAccounts().length);

  accountTypes = [
    { value: 'all', label: 'Tất cả' },
    { value: 'Tài khoản ngân hàng', label: 'Tài khoản ngân hàng' },
    { value: 'Tiền mặt', label: 'Tiền mặt' },
    { value: 'Tài khoản đầu tư', label: 'Tài khoản đầu tư' },
    { value: 'Ví điện tử', label: 'Ví điện tử' },
    { value: 'Khác', label: 'Khác' }
  ];

  statuses = [
    { value: 'all', label: 'Tất cả' },
    { value: 'active', label: 'Đang hoạt động' },
    { value: 'inactive', label: 'Ngừng hoạt động' }
  ];

  displayedColumns: string[] = ['name', 'balance', 'status', 'accountType', 'actions'];

  ngOnInit() {
    this.accounts.set(this.accountsService.getAccounts());
    this.totalBalance.set(this.accountsService.getTotalBalance());
  }

  onPageChange(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  onSearchChange() {
    this.pageIndex.set(0);
  }

  onFilterChange() {
    this.pageIndex.set(0);
  }

  getStatusColor(status: string): string {
    return status === 'active' ? 'accent' : 'warn';
  }

  getStatusLabel(status: string): string {
    return status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động';
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(value);
  }
}
