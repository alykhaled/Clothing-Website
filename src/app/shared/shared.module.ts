import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [...fromComponents.components, ProductItemComponent],
  exports: [
    ...fromComponents.components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    FontAwesomeModule,
    RouterModule
  ],
})

export class SharedModule {}