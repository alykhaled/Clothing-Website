import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { MyAccountRoutingModule } from './myaccount-routing.module';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';



@NgModule({
  declarations: [
    MyaccountComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule
  ]
})
export class MyaccountModule { }
