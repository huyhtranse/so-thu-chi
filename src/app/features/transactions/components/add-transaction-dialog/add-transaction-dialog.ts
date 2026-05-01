import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-add-transaction-dialog',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './add-transaction-dialog.html',
  styleUrl: './add-transaction-dialog.scss',
})
export class AddTransactionDialog {
  private fb = inject(FormBuilder);

  private dialogRef =
    inject(MatDialogRef<AddTransactionDialog>);

  form = this.fb.group({
    amount: ['', Validators.required],
    category: ['', Validators.required],
    account: ['Ví'],
    note: ['']
  });

  close(): void {
    this.dialogRef.close();
  }

  save(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);

    this.dialogRef.close(this.form.value);
  }
}
