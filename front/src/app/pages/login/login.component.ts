import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ILogin } from '../../interfaces/ILogin';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  public formBuilder = inject(FormBuilder)

  public loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  })

  login(){
    if(this.loginForm.invalid) return
    const object:ILogin = {
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? ''
    }
    this.authService.login(object).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token)
        this.router.navigate(['/home'])
      },
      error: (error) => {
        if (error.status === 401) {
          alert(error.error.message || 'Unauthorized access. Please check your credentials.');
        } else if (error.status === 400) {
          alert(error.error.message || 'Bad request. Please check your input.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    })
  }

}
