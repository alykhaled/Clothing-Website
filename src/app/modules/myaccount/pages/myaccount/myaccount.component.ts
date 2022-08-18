import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/interfaces/user';
import { AuthenticationService } from '@core/services';
import { MyAccountService } from '@core/services/myaccount.service';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  data: User;
  recommendedProducts:any = [];  

  constructor(private myaccountService: MyAccountService, private authServer: AuthenticationService, private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
    this.getProducts();

  }

  getData(){
    this.myaccountService.getProfile().subscribe((response) => {
      this.data = response; 
      console.log(response);
    });
  }

  logout(){
    this.authServer.logout();
    this.router.navigate(['/login']);
    location.reload;
  }

  getProducts()
  {
    this.productService.getProducts().subscribe((response) => {
      this.recommendedProducts = response;
      this.recommendedProducts = this.recommendedProducts.slice(1,3);
      console.log(response);
    })
  }
}
