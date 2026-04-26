import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { DashboardHome } from './features/dashboard/pages/dashboard-home/dashboard-home';
import { MATERIAL_IMPORTS } from './shared/material-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MATERIAL_IMPORTS, Header, Sidebar, DashboardHome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('so-thu-chi-dashboard');
}
