import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup!: FormGroup;
  userData: any = [];

  constructor(private servic: ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.required, Validators.email]),
      phonenum: new FormControl("", [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      password: new FormControl("", [Validators.required]),
    
    })
    
  }
  
  
  getuser() {
    this.servic.addvalues(this.signup.value, "/signup")
      .subscribe(
        (data: any) => {
          alert("signup successfull")
          this.userData = data;
          console.log(data);
          this.signup.reset()
          this.router.navigate(['signup'])
        })
  }
}
