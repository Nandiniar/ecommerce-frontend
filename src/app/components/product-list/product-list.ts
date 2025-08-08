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
     });
  }


listProducts(){
  // check if the id is available
  const hasCategoryId:boolean=this.route.snapshot.paramMap.has('id');
if(hasCategoryId){
  //get the "id " param string, convert string  to a number using + symbol
 const categoryIdParam = this.route.snapshot.paramMap.get('id');
      this.currentCategoryId = categoryIdParam ? +categoryIdParam : 0
}
else{

}
  this.product.getProductList(this.currentCategoryId).subscribe(
    data=>{
      this.products=data;
    }
  )
}
imageurl="assets/images/products";
}
