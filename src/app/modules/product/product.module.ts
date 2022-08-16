import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './pages/';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [...fromComponents.components],
  exports: [
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
