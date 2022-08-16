import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './pages/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [...fromComponents.components],
  exports: [
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    RouterModule
  ]
})
export class AuthModule { }
