import { Component } from '@angular/core';
import { UrlService } from '../ServicesURL/url.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  ngOnInit() {

    this.getProducts();
  }
  constructor(private _ser: UrlService) {

  }
  productsArray: any
  getProducts() {

    this._ser.getProducts().subscribe((data) => {

      this.productsArray = data
      console.log(this.productsArray)

    })
  }
}
