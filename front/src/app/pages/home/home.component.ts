import { Component } from '@angular/core';
import { PagopluxButtonComponent } from '../../components/pagoplux-button/pagoplux-button.component';
import { TransactionStatusComponent } from '../../components/transaction-status/transaction-status.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PagopluxButtonComponent, TransactionStatusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
