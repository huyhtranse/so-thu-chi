import { Component, signal } from '@angular/core';
import { MainLayout } from './layout/main-layout/main-layout';
import { DashboardHome } from './features/dashboard/pages/dashboard-home/dashboard-home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayout, DashboardHome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('so-thu-chi-dashboard');
}
