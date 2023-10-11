import { Component, OnInit } from '@angular/core';
import { Category } from './../../interface/product';
import { ProductService } from 'src/app/servics/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductService: ProductService) {
  }
  ngOnInit(): void {
    this.getCategories();
  }
  allCategories: Category[] = [];
  getCategories() {
    this._ProductService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.allCategories = res.data;
      }
    })
  }
  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 10,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplaySpeed: 6000,
    autoplayTimeout: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
