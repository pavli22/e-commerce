import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListServiceService {

  constructor(private _HttpClient: HttpClient) { }


  getUserWishList(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
  }
  addToWishList(id: string): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
      productId: id,
    })
  }
  removeFromWishList(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }
}
