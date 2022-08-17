import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  productsData:any = [];  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts()
  {
    this.productsService.getProducts().subscribe((response) => {
      this.productsData = response;
      console.log(response);
    })
  }

}
