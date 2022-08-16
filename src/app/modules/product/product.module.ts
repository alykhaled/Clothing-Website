import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './pages/';
import { ProductRoutingModule } from './product-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [...fromComponents.components],
  exports: [
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
