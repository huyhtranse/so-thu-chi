import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-overview-chart',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './overview-chart.html',
  styleUrl: './overview-chart.scss',
})
export class OverviewChart {
  stats = input<any>(null);
}
