import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchId', component: HomeComponent},
  {path: 'details/:id', component: ProductDetailsComponent},
  {path: 'createProduct', component: CreateProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'myproducts', component: MyproductsComponent},
  {path: 'verify/:userId  ', component: EmailVerificationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
