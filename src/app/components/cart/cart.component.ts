import { Component, OnInit } from '@angular/core';
import { CratServiceService } from 'src/app/servics/crat-service.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CratServiceService: CratServiceService, private _ToastrService: ToastrService) {

  }
  ngOnInit(): void {
    this.getUserCart()
  }
  data: any;
  cartNum: number = 0;
  getUserCart(): void {

    this._CratServiceService.GetLoggedCart().subscribe({
      next: (res: any) => {
        console.log(res);
        this.data = res.data
        console.log(this.data);
        this.cartNum = res.numOfCartItems

      }
    })

  }
  removeSpecificItem(id: string) {
    console.log('test');
    this._CratServiceService.removeSpecificItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.data;
        this.cartNum = res.numOfCartItems

        this._ToastrService.error('Item Deleted');
        this._CratServiceService.cartNumber.next(res.numOfCartItems)
      }
    })
  }
  clearUserCart() {
    this._CratServiceService.clearUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartNum = 0
        this.data = [];
        this._CratServiceService.cartNumber.next(0);
      }
    })
  }
  updateCart(id: string, count: number) {
    this._CratServiceService.updateCart(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.data;
        this.cartNum = res.numOfCartItems
      }

    })

  }
}
