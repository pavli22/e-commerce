import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servics/product.service';
import { Product } from './../../interface/product';
import { CratServiceService } from 'src/app/servics/crat-service.service';
import { ToastrService } from 'ngx-toastr';
import { WishListServiceService } from 'src/app/servics/wish-list-service.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  searchValue: string = '';
  constructor(private _ProductService: ProductService, private _CratServiceService: CratServiceService, private _ToastrService: ToastrService, private _WishListServiceService: WishListServiceService) {
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.wishListId = localStorage.getItem('wishListIds') !== null ? localStorage.getItem('wishListIds')?.split(',') : [];
    console.log(localStorage.getItem('wishListIds'));

  }
  wishListId: any = []
  productList!: Product[];
  getAllProducts(): void {
    this._ProductService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res.data;
      }
    })
  }
  addToCart(id: string): void {
    this._CratServiceService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message);
        this._CratServiceService.cartNumber.next(res.numOfCartItems);
      }
    })
  }
  addToWishList(id: string): void {
    this._WishListServiceService.addToWishList(id).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('wishListIds', res.data)
        this._ToastrService.success(res.message);
      }
    })

  }
  removeFromWishList(id: string): void {
    this._WishListServiceService.removeFromWishList(id).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('wishListIds', res.data) ;
        this._ToastrService.error(res.message);
      }
    })
  }

  changeIconColor(event: any, id: string): void {
    if (event.target.classList.contains('text-white')) {
      event.target.classList.replace('text-white', 'text-danger')
      this.addToWishList(id);
    }
    else {
      event.target.classList.replace('text-danger', 'text-white');
      this.removeFromWishList(id);
    }
  }
}
