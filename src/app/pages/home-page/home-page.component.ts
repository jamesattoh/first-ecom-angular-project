import {Component, output} from '@angular/core';
import {CardProductComponent} from './components/card-product/card-product.component';
import {ProductType} from '../../shared/types/product.type';

@Component({
  selector: 'app-home-page',
  imports: [
    CardProductComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    protected products : ProductType[] = [
      {
        id : 1,
        name : 'Smart TV',
        price : 200
      },
      {
        id : 2,
        name : 'Machine à café',
        price : 160
      },
      {
        id : 3,
        name : 'Vélo électrique',
        price : 450
      },
      {
        id : 4,
        name : 'Piano',
        price : 1900
      },
      {
        id : 5,
        name : 'IPhone 14',
        price : 1010
      },
      {
        id : 6,
        name : 'Macbook Pro M4',
        price : 809
      },
    ];

    // créons un nouveau tableau qui contiendra les produits du panier
    public cartProducts : ProductType[] = []; // je dois necessairement indiquer le type de mon objet

    readonly totalProducts = output<number>();

    public getProduct(product: ProductType | undefined): void {
      //console.log('product', product);
      this.cartProducts.push(product as ProductType); // utilisation de l'alias
      this.totalProducts.emit(this.cartProducts.length); // recuperer la taille du tableau
    }
}
