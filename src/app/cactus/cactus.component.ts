import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.component.html',
  styleUrls: ['./cactus.component.css']
})
export class CactusComponent implements OnInit{
  cacts:any =[];
  
  constructor( private servic:ServiceService){}
  ngOnInit() {
   this.servic.show().subscribe((data:any)=>{
    console.log(data);
    this.cacts=data;
   })
  }
  count=0;
increment(){
  this.count +=1
}
 
decrement(){
    this.count -=1
}


hide = true;
sidenavOpen = true;

toggleSidenav() {
  this.sidenavOpen = !this.sidenavOpen;
}




}
