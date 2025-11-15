import {Component, inject} from '@angular/core';
import {ProductType} from '../../shared/types/product.type';
import {ActivatedRoute} from '@angular/router';

export type CartProductWithQuantity = {
  product: ProductType;
  quantity: number;
}

@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  protected cartProducts: ProductType[] = [];

  private readonly activatedRoute = inject(ActivatedRoute); // Ce service donne accès aux infos de la route en cours (URL, query params, etc.)

  protected CartProductsWithQuantity: CartProductWithQuantity[] = []; // CartProductsWithQuantity est un tableau où chaque produit sera unique, avec un compteur de combien de fois il apparaîtra

  constructor() {
    const products = this.activatedRoute.snapshot.queryParamMap.get('products'); //récupère la valeur du paramètre products dans l’URL (exemple : ...?products=[{...},{...}]).
    if (products) {
      this.cartProducts = JSON.parse(products); // Si ce paramètre existe, on le parse en JSON pour obtenir un tableau d’objets ProductType
    }

    // on passe à une transformation en produits avec quantité
    this.cartProducts.map((product, index: number, cartProducts) => { // Pour chaque produit du tableau cartProducts
      const productIndex = this.CartProductsWithQuantity.findIndex(cartProduct => cartProduct.product.id === product.id); // On cherche s’il existe déjà dans CartProductsWithQuantity (comparaison par id)
      if (productIndex === -1) { // S’il n’existe pas, on l’ajoute avec quantity: 1
        this.CartProductsWithQuantity.push({
          product,
          quantity: 1,
        })
      } else {
        this.CartProductsWithQuantity[productIndex].quantity++; // S’il existe déjà, on incrémente sa quantité
      }

      return this.CartProductsWithQuantity;
    })
  }

}
