import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  

  constructor(private productsService: ProductsService) { }
  productsData:any = [];  
  totalPrice = 0;
  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts()
  {
    this.productsService.getCartProducts().subscribe((response) => {
      this.productsData = response.filter((addedToCart => addedToCart.addedToCart == true));
      this.totalPrice = this.productsData.reduce((accumulator: any, obj: { price: any; }) => {
        return accumulator + obj.price;
      }, 0);
    })
  }

  removeItem(id:number)
  {
    this.productsService.removeFromCart(id).subscribe((response) => {
      
    });
    this.ngOnInit();
  }

}
