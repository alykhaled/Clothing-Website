import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent } from './modules/auth/pages';
import { HomeComponent } from './modules/home/home/home.component';
import { ProductDetailsComponent } from './modules/product/pages';

const routes: Routes = [
  {path:"",loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"product", loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)},
  {path:"products", loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)},
  {path:"cart", loadChildren: () => import('./modules/cart/cart.module').then((m) => m.CartModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
