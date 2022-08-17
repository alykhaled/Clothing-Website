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

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.getProduct(this.id);
    });
  }
  getProduct(id:number)
  {
    this.productService.getProduct(id).subscribe((response) => {
      this.data = response;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
