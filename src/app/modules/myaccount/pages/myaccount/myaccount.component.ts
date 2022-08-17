import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/interfaces/user';
import { MyAccountService } from '@core/services/myaccount.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

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
