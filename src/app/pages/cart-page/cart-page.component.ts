import {Component, inject} from '@angular/core';
import {ProductType} from '../../shared/types/product.type';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  protected cartProducts: ProductType[] = [];

  private readonly activatedRoute = inject(ActivatedRoute); // pour avoir des infos sur la route activée

  constructor() {
    const products = this.activatedRoute.snapshot.queryParamMap.get('products');
    if (products) {
      this.cartProducts = JSON.parse(products);
      console.log("cartProducts from cart page", this.cartProducts);
    }
  }

}
