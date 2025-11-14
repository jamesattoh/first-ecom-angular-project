import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'e-commerce-app';

  // public totalProducts = 0; //utilisation de l'inférence de type comme le type est déjà connu
  // private readonly router = inject(Router) // pour utiliser la classe Router, je dois l'injecter dans le composant où je veux l'utiliser
  // public showingCartPage: boolean = false;
  //
  // public getTotalProducts( totalProducts : number ) : void {
  //   this.totalProducts = totalProducts;
  // }
  //
  // public goToCartPage(): void{
  //   this.showingCartPage = true;
  //   this.router.navigate(['/cart']);
  // }


}
