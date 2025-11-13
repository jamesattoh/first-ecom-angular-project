import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'e-commerce-app';

  public totalProducts = 0; //utilisation de l'inférence de type comme le type est déjà connu

  public getTotalProducts( totalProducts : number ) : void {
    this.totalProducts = totalProducts;
  }
}
