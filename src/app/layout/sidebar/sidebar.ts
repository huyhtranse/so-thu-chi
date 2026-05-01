import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material-imports';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionDialog } from '../../features/transactions/components/add-transaction-dialog/add-transaction-dialog';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MATERIAL_IMPORTS, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private dialog = inject(MatDialog);

  openAddTransactionDialog(): void {

    this.dialog.open(
      AddTransactionDialog,
      {
        width: '1000px',
        maxWidth: '95vw',
        panelClass: 'transaction-dialog'
      }
    );
  }
}
