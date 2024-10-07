import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrl: './get-all-product.component.css'
})
export class GetAllProductComponent {
  ngOnInit() {
    this.getAllProducts();
  }
  constructor(private _ser: UrlService) {

  }
  productArray: any
  getAllProducts() {
    this._ser.getAllProducts().subscribe((data) => {
      this.productArray = data
      console.log(this.productArray)
    })
  }

  object = {
    cartId: 0,
    productId: 0,
    userId: 0,
    quantity:0


  }
  addToCart(id: any) {
    this.object.productId = id;
    this._ser.addToCart({ ...this.object });
    
  }
}
