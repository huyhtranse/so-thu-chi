import { Component, signal } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';
import { BalanceCard } from "../../components/balance-card/balance-card";
import { OverviewChart } from "../../components/overview-chart/overview-chart";
import { IncomeStat } from "../../components/income-stat/income-stat";
import { ExpenseStat } from "../../components/expense-stat/expense-stat";
import { RecentHistory } from "../../components/recent-history/recent-history";
import { SpendingCalendar } from "../../components/spending-calendar/spending-calendar";
import { AccountList } from "../../components/account-list/account-list";
import { DashboardStore } from '../../dashboard.store';
import { CashflowChart } from "../../components/cashflow-chart/cashflow-chart";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    MATERIAL_IMPORTS,
    BalanceCard,
    OverviewChart,
    IncomeStat,
    ExpenseStat,
    RecentHistory,
    SpendingCalendar,
    AccountList,
    CashflowChart
],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss',
})
export class DashboardHome {
  constructor(public store: DashboardStore) {}

  ngOnInit() {
    this.store.loadData();
  }
}
