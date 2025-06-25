import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-ecommerce';
}
