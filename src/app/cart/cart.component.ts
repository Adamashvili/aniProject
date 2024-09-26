import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public service: ApiService) {
    this.gamoachineKalata();
  }

  public cartList: any;
  gamoachineKalata() {
    this.service.getCartList().subscribe((kalata) => {
      this.cartList = kalata;
      console.log(this.cartList);
    });
  }

  washale(productID: any) {
    console.log(productID);

    this.service.deletefromCart(productID).subscribe(() => {
      this.gamoachineKalata();
    });
  }

  increase(item: any) {
    item.quantity++;
    this.service
      .uptadeCart({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      })
      .subscribe();
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.service
        .uptadeCart({
          quantity: item.quantity,
          price: item.product.price,
          productId: item.product.id,
        })
        .subscribe();
    }
  }
}
