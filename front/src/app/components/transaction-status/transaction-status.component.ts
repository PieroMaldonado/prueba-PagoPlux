import { Component, inject } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TransactionStatusDialogComponent } from '../transaction-status-dialog/transaction-status-dialog.component';

@Component({
  selector: 'app-transaction-status',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './transaction-status.component.html',
  styleUrl: './transaction-status.component.css'
})
export class TransactionStatusComponent{
  private transactionService = inject(TransactionService)
  transactionId: string = ''
  isLoading: boolean = false
  readonly dialog = inject(MatDialog);

  getTransactionStatus() {
    this.transactionId = localStorage.getItem('transactionId') || ''
    if (this.transactionId) {
      this.isLoading = true
      this.transactionService.getTransactionById({ idTransaction: this.transactionId }).subscribe({
        next: (response) => {
          if (response.code === 1) {
            alert(response.description)
          } else {
            this.openDialog(response)
          }
          this.isLoading = false
        },
        error: (err) => {
          console.error('Error fetching transaction status:', err)
          this.isLoading = false
        }
      })
    } else {
      alert('Realice una transacción primero')
    }
  }

  openDialog(response: any): void {
    this.dialog.open(TransactionStatusDialogComponent, {
      data: response
    });
  }
}