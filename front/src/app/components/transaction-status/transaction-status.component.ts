import { Component, inject, Input } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transaction-status',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './transaction-status.component.html',
  styleUrl: './transaction-status.component.css'
})
export class TransactionStatusComponent {
  private transactionService = inject(TransactionService)
  @Input() transactionId: string = ''

  getTransactionStatus() {
    // if(!this.transactionId) 
    // {
    //   alert('Aún no realiza una transacción');
    // }

    const transactionId = 'e530361c-2145-4e0f-84e1-70cce4ff4a91';
    this.transactionService.getTransactionById({ idTransaction: transactionId }).subscribe({
      next: (response) => {
        console.log('Transaction Response:', response);
      },
      error: (err) => {
        console.error('Error fetching transaction status:', err);
      }
    });
  }
}
