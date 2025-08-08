import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkActive,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-ecommerce';
}
