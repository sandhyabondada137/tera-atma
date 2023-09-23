import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  login!: FormGroup;
constructor(private servic:ServiceService,private router:Router){}

  ngOnInit(): void {
    this.login = new FormGroup({
      mail: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required]),
      
    })
  }

  getuser(){
    this.servic.read(`/signup`)
    .subscribe((res:any)=>{
      const user = res.find((a:any)=>{
        return a.mail===this.login.value.mail &&  a.password===this.login.value.password
      })
      if (user){
        // alert("welcome user")
        this.login.reset();
        this.router.navigate(['/home'])
      }else{
        alert("mail or password is incorrect")
        this.login.reset();
      }
    });
    
  }
}
