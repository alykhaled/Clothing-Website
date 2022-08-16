import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent } from './modules/auth/pages';
import { ProductDetailsComponent } from './modules/product/pages';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"product", loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)},
  {path:"products", loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
