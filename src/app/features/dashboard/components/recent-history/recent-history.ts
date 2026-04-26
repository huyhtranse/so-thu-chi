import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-recent-history',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './recent-history.html',
  styleUrl: './recent-history.scss',
})
export class RecentHistory {
  items = input<any[]>([]);
}
