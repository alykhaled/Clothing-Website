import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from '@core/models/interfaces/product-data';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  id: number;
  private sub: any;
  data: ProductData;
  recommendedProducts:any = [];  

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.getProduct(this.id);
       this.getProducts();
    });
  }
  getProduct(id:number)
  {
    this.productService.getProduct(id).subscribe((response) => {
      this.data = response;
    });
  }
  addToCart()
  {
    console.log("fsd");
    this.productService.addToCart(this.id).subscribe((response) => {
      location.reload();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getProducts()
  {
    this.productService.getProducts().subscribe((response) => {
      this.recommendedProducts = response;
      this.recommendedProducts = this.recommendedProducts.slice(1,4);
      console.log(response);
    })
  }
}
