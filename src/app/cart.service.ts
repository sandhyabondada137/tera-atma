import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   cartitemlist:any=[];
   productlist=new BehaviorSubject([]);

  constructor() { }
  show(){
    return this.productlist.asObservable();
  }
  setproducts(product:any){
    this.cartitemlist.push(...product);
    this.productlist.next(product)
  }
  addtocart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.gettotalprice();
    console.log(this.cartitemlist)
  }
  gettotalprice() : number{
    let grandTotal=0;
    this.cartitemlist.map((a:any)=>{
      grandTotal+=a.total
    })
    return grandTotal;
  }
  removecartitem(product:any){
     this.cartitemlist.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartitemlist.splice(index,1)
      }
     })
     this.productlist.next(this.cartitemlist)
  }
  removeallcart(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist);
  }
}
