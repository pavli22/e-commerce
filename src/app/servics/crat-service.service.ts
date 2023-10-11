import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CratServiceService {
  constructor(private _HttpClient: HttpClient) {

  }

  header: {} = {
    token: localStorage.getItem("userToken"),
  }
  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart', { productId: id })
  }
  GetLoggedCart(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',)
  }
  removeSpecificItem(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }
  clearUserCart(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`)
  }
  updateCart(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count: count })
  }
}
