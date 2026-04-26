import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material-imports';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MATERIAL_IMPORTS, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
