import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit{

  productlist:any=[];

  totalitem:number=0;
constructor(private servic:ServiceService, private cart:CartService){}

ngOnInit(): void {
  this.servic.show().subscribe((res:any)=>{
    this.productlist=res;
    this.productlist.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
    });
  })
  this.cart.show().subscribe(res=>{
    this.totalitem=res.length;
  })
}
addtocart(item:any){
this.cart.addtocart(item)
}
}
