import { Component } from '@angular/core';
import { UrlService } from '../ServicesURL/url.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrl: './products-categories.component.css'
})
export class ProductsCategoriesComponent {

  ngOnInit() {
    
    this.getCategories();
  }
  constructor(private _ser: UrlService) {
   
  }
  categoriesArray: any
  getCategories() {
    
    this._ser.getCategories().subscribe((data) => {
      
      this.categoriesArray = data
      console.log(this.categoriesArray)

    })
  }
}
