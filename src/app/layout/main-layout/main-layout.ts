import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { MATERIAL_IMPORTS } from '../../shared/material-imports';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    MATERIAL_IMPORTS,
    Header,
    Sidebar,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
