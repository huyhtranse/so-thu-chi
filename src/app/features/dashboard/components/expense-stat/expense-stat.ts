import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';
import { provideCharts, withDefaultRegisterables, BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-expense-stat',
  standalone: true,
  imports: [MATERIAL_IMPORTS, BaseChartDirective],
  templateUrl: './expense-stat.html',
  styleUrl: './expense-stat.scss',
  providers: [
    provideCharts(withDefaultRegisterables())
  ]
})
export class ExpenseStat {
  data = input<any>(null);

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Must have'],
    datasets: [{
      data: [100],
      backgroundColor: ['#ffcc29'], // Màu vàng
      hoverBackgroundColor: ['#fbc02d'],
      borderWidth: 0,
    }]
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      }
    },
    cutout: '70%' // Đây là "bí kíp" để làm vòng tròn rỗng giữa
  } as any; // Cast to 'any' due to ng2-charts type limitations
}
