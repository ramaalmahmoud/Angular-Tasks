import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  ngOnInit() {
    this.getCartItem()
  }

  constructor(private _ser: UrlService) { }
  array: any
  getCartItem() {
    this._ser.cartItemObser.subscribe((data) => {
      this.array = data;
      console.log(this.array)
    })
  }

  increamnt(id: any) {
    this._ser.increseQuantity(id);
  }

  decreamnt(id: any) {
    this._ser.decreaseQuantity(id);
  }
}
