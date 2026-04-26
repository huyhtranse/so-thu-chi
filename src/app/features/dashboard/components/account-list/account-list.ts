import { Component, input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './account-list.html',
  styleUrl: './account-list.scss',
})
export class AccountList {
  accounts = input<any[]>([]);
}
