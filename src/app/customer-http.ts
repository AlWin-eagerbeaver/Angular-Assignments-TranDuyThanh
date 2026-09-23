import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, retry, throwError, shareReplay } from 'rxjs'; 
import { ICustomerGroup } from './interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttp {
  private _url: string = "/assets/customers.json";
  private dataCache$: Observable<ICustomerGroup[]> | null = null; 

  constructor(private _http: HttpClient) { }

  getGroupCustomers(): Observable<ICustomerGroup[]> {
    if (!this.dataCache$) {
      this.dataCache$ = this._http.get<ICustomerGroup[]>(this._url).pipe(
        retry(3),
        shareReplay(1), 
        catchError(this.handleError)
      );
    }
    
    return this.dataCache$; 
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}