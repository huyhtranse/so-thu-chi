import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-income-stat',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './income-stat.html',
  styleUrl: './income-stat.scss',
})
export class IncomeStat {
  data = input<any>(null);
}
