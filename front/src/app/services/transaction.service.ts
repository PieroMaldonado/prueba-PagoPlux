import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { ITransaction } from '../interfaces/ITransaction';

import { Observable } from 'rxjs';
import { IResponseTransaction } from '../interfaces/IResponseTransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private http = inject(HttpClient)
  private baseUrl:string = appsettings.apiUrl
  constructor() { }

  getTransactionById(objeto:ITransaction): Observable<IResponseTransaction>{
    return this.http.get<IResponseTransaction>(`${this.baseUrl}transaction?idTransaction=${objeto.idTransaction}`);
  }
}
