import { Component,Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any=[];
grandtotal:number=0;
constructor(private cart:CartService){}
ngOnInit():void {
this.cart.show().subscribe(res=>{
  this.products=res;
  this.grandtotal=this.cart.gettotalprice()
})
}
 
removeitem(product:any){
 this.cart.removecartitem(product);
}
emptycart(){
  this.cart.removeallcart()
}
}
