import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from '../browser.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowserRoutingModule { }
