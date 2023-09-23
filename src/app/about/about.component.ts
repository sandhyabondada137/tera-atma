import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
