import { Component, signal } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material-imports';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  userName = signal('Trần Huy');
}
