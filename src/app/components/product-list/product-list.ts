import { Component,OnInit } from '@angular/core';
import { Products } from '../../service/products';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [  CommonModule,RouterModule],
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products:Product[]=[];
  currentCategoryId:number=0;
  constructor(private product:Products,private route:ActivatedRoute){}
  ngOnInit(): void {
    
     this.route.paramMap.subscribe(()=>{
      this.listProducts();
     })
  }
listProducts(){
  const hasCategoryId:boolean=this.route.snapshot.paramMap.has('id')
  this.product.getProductList().subscribe(
    data=>{
      this.products=data;
    }
  )
}
imageurl="assets/images/products";
}
