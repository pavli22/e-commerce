import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private _HttpClient: HttpClient) {
  }
  baseURL: string = 'https://ecommerce.routemisr.com';
  forgotPassword(userEmail: object): Observable<any> {
    return this._HttpClient.post(this.baseURL + '/api/v1/auth/forgotPasswords', userEmail);
  }
  verifyRestPassword(userCode: object): Observable<any> {
    return this._HttpClient.post(this.baseURL + '/api/v1/auth/verifyResetCode', userCode);
  }
  restPassword(userData: object): Observable<any> {
    return this._HttpClient.put(this.baseURL + '/api/v1/auth/resetPassword', userData);
  }

}
