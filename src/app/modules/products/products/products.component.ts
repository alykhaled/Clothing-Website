import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
