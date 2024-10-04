import { Component } from '@angular/core';
import { PagopluxButtonComponent } from '../../components/pagoplux-button/pagoplux-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PagopluxButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
