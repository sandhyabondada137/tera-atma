import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserComponent } from './browser/browser.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CactusComponent } from './cactus/cactus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: BrowserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  {path:"home",component:DashboardComponent},
  {path:"homes",component:HomeComponent},

  {path:"shop",component:ShopComponent},

  {path:"browser",component:BrowserComponent},
  {path:"cact",component:CactusComponent},
  {path:"about",component:AboutComponent},
  {path:"test",component:TestimonialComponent},
  {path:"cart",component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
