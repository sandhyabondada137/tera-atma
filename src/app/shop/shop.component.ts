import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  prod:any =[];
  cart: any=[]
  constructor( private servic:ServiceService){}
  ngOnInit() {
   this.servic.show().subscribe((data:any)=>{
    console.log(data);
    this.prod=data;
   })
  }
 
  Add=0;
  increment(){
    this.Add +=1
  }
   
  decrement(){
      this.Add -=1
  }
  }





