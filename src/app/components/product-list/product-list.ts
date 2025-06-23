import { Component,OnInit } from '@angular/core';
import { Products } from '../../service/products';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [  CommonModule],
  templateUrl: './product-list-table.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products:Product[]=[];
  constructor(private product:Products){}
  ngOnInit(): void {
     this.listProducts() ;
  }
listProducts(){
  this.product.getProductList().subscribe(
    data=>{
      this.products=data;
    }
  )
}
imageurl="assets/images/products";
}
