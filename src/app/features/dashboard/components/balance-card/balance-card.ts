import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {
  balance = input<number>(0);
}
