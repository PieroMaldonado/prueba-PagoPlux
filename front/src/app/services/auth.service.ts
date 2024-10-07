import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { ILogin } from '../interfaces/ILogin';
import { Observable } from 'rxjs';
import { IResponseLogin } from '../interfaces/IResponseLogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  private baseUrl:string = appsettings.apiUrl
  private router = inject(Router)

  constructor() { }

  login(objeto:ILogin): Observable<IResponseLogin>{
    return this.http.post<IResponseLogin>(`${this.baseUrl}login`, objeto)
  }

  validateToken(token: string): Observable<{ isValid: boolean }> {
    return this.http.get<{ isValid: boolean }>(`${this.baseUrl}validate-token?token=${token}`);
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('transactionId')
    this.router.navigate(['']);
  }
}
