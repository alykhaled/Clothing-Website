import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/interfaces/user';
import { MyAccountService } from '@core/services/myaccount.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  data: User;
  constructor(private myaccountService: MyAccountService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.myaccountService.getProfile().subscribe((response) => {
      this.data = response; 
      console.log(response);
    });
  }

}
