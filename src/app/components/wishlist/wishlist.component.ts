import { Component, OnInit } from '@angular/core';
import { WishListServiceService } from 'src/app/servics/wish-list-service.service';
import { Product } from './../../interface/product';
import { ToastrService } from 'ngx-toastr';
import { CratServiceService } from 'src/app/servics/crat-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private _WishListServiceService: WishListServiceService, private _ToastrService: ToastrService, private _CratServiceService: CratServiceService) { }
  ngOnInit(): void {
    this.getUserWishList()
  }
  data: Product[] = [];
  count: number = 0;
  getUserWishList() {
    this._WishListServiceService.getUserWishList().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.data;
        this.count = res.count
        console.log(this.data);

      }
    })
  }
  removeSpecificItem(id: string) {
    this._WishListServiceService.removeFromWishList(id).subscribe({
      next: (res) => {
        console.log(res);
        this.getUserWishList();
        localStorage.setItem('wishListIds', res.data);
        this._ToastrService.error(res.message);
      }
    })
  }
  addToCart(id: string): void {
    this._CratServiceService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message);
        this._CratServiceService.cartNumber.next(res.numOfCartItems);
        this.removeSpecificItem(id);
        this.getUserWishList();
      }
    })
  }
}
