import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IResponseTransaction } from '../../interfaces/IResponseTransaction';

@Component({
  selector: 'app-transaction-status-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './transaction-status-dialog.component.html',
  styleUrl: './transaction-status-dialog.component.css'
})
export class TransactionStatusDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TransactionStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IResponseTransaction
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
