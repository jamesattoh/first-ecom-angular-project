import {Component, input, output} from '@angular/core';
import {ProductType} from '../../../../shared/types/product.type';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  readonly product = input<ProductType>(); //je dis au card-product qu'il va contenir des infos provenant d'ailleurs, readonly pour les input/output

  readonly addProduct = output<ProductType | undefined>(); //indiquer au parent (homepage) du clic sur un produit card-product

  public onAddToCard(product: ProductType | undefined): void {
    this.addProduct.emit(product); // emit() envoie l'info au parent
  }
}
