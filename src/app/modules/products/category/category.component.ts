import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private sub: any;
  constructor(private productsService: ProductsService,private route: ActivatedRoute) { }
  productsData:any = [];  
  categoryName = '';
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.categoryName = params['id'];
      this.getProducts();
   });
  }

  getProducts()
  {
    this.productsService.getByCategory(this.categoryName).subscribe((response) => {
      this.productsData = response;
      console.log(response);
    })
  }
}
