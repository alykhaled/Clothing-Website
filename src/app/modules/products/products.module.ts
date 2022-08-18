import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
