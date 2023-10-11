import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) { }

  register(data: {}): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
  }
  login(data: {}): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data);
  }
  logOut() {
    localStorage.removeItem("userToken");
    this._Router.navigate(['/login']);
  }
  payment(id: string, data: object): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`, {
      shippingAddress: data,
    });

  }
}
