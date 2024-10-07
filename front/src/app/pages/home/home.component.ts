import { Component, inject } from '@angular/core';
import { PagopluxButtonComponent } from '../../components/pagoplux-button/pagoplux-button.component';
import { TransactionStatusComponent } from '../../components/transaction-status/transaction-status.component';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PagopluxButtonComponent, TransactionStatusComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private authService = inject(AuthService)

  logout() {
    this.authService.logout();
    console.log('Usuario ha cerrado sesión');
  }
}
