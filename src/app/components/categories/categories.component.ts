import { Component, OnInit } from '@angular/core';
import { CategoriesServiceService } from 'src/app/servics/categories-service.service';
import { Category, Subcategory } from './../../interface/product';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _CategoriesServiceService: CategoriesServiceService) { }
  ngOnInit(): void {
    this.getAllCategories();
  }
  data: Category[] = [];
  dataSupCategory: Subcategory[] = [];
  subCategoryName: string = '';
  countOfSubCategory: number = 0;
  getAllCategories() {
    this._CategoriesServiceService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.data;
        console.log(this.data);

      }
    })
  }
  getSupCategory(id: string, name: string) {
    this.subCategoryName = name;

    this._CategoriesServiceService.getSupCategory(id).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSupCategory = res.data;
        this.countOfSubCategory = res.results
      }
    })

  }
}
