import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servics/product.service';
import { Product } from './../../interface/product';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CratServiceService } from 'src/app/servics/crat-service.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ID: string = '';
  productDetails!: Product;
  constructor(private _ProductService: ProductService, private _ActivatedRoute: ActivatedRoute, private _CratServiceService: CratServiceService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        console.log(res.get('id'));
        this.ID = res.get('id') || '';
      }
    })
    this.getProductDetails();
  }
  getProductDetails() {
    this._ProductService.getSpecificProduct(this.ID).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productDetails = res.data;
      }
    })
  }
  addToCart(id: string):void {
    this._CratServiceService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
