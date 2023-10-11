import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/servics/brands.service';
import { Brand } from './../../interface/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  constructor(private _BrandsService: BrandsService, private _Router: Router) { }
  ngOnInit(): void {
    this.getAllBrands();
    this._Router.canceledNavigationResolution = 'computed';
  }
  data: Brand[] = [];
  dataBrandSpecific: any = []
  getAllBrands() {
    this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.data;
      }
    })
  }
  getSpecificBrand(id: string) {
    this._BrandsService.getSpecificBrand(id).subscribe({
      next: (res) => {
        console.log(res);
        this.dataBrandSpecific = res.data
      }
    })
  }
}
