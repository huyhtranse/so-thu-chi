import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-expense-stat',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './expense-stat.html',
  styleUrl: './expense-stat.scss',
})
export class ExpenseStat {
  data = input<any>(null);
}
