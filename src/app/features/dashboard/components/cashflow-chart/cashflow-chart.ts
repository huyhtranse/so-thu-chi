import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-cashflow-chart',
  standalone: true,
  imports: [MATERIAL_IMPORTS, BaseChartDirective],
  templateUrl: './cashflow-chart.html',
  styleUrl: './cashflow-chart.scss',
})
export class CashflowChart {

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['05/2025', '06/2025', '07/2025', '08/2025', '09/2025', '10/2025'],
    datasets: [
      { 
        data: [2, 18, 1, 0, 41, 8], 
        label: 'Thu', 
        backgroundColor: '#81c784', // Màu xanh nhạt (MISA)
        borderRadius: 6 
      },
      { 
        data: [5, 8, 2, 32, 6, 1], 
        label: 'Chi', 
        backgroundColor: '#e57373', // Màu đỏ nhạt (MISA)
        borderRadius: 6 
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } }, // Tắt lưới dọc cho sạch
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { display: false } // Tắt legend mặc định vì mình tự làm UI
    }
  };
}
