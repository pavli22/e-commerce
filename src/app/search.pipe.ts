import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Product[], searchValue: string): Product[] {
    return list.filter(item => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
