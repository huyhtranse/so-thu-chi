import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-spending-calendar',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './spending-calendar.html',
  styleUrl: './spending-calendar.scss',
})
export class SpendingCalendar {
  events = input<any[]>([]);
}
