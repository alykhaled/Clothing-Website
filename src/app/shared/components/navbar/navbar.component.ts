import { Component, OnInit } from '@angular/core';
import { faSearch,faUser,  faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faAngry} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AuthenticationService } from '@core/services';
import { ProductsService } from '@core/services/products.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private productsService: ProductsService) { }

  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUser = faUser;
  isLogged:boolean = false;
  cartSize = 0;
  productsData:any = [];  

  ngOnInit(): void {
    this.isLogged = this.authService.isAuthenticated();
    this.getCartSize();
    this.authService.notifyObservable$.subscribe(res => {
      if(res){
          this.isLogged = this.authService.isAuthenticated();
      }
    })
    this.productsService.notifyObservable$.subscribe(res => {
      if(res){
        this.getCartSize();
      }
    })
  }
  ele = document.getElementById('shopItem');
  viewNav(){
    const fullNav = document.getElementById('fullNav');
    fullNav?.style.setProperty('display', 'block');
    // fullNav?.style.setProperty('justify-content', 'space-between');
    fullNav?.style.setProperty('animation', 'showNav 300ms forwards');
  }
  hideNav(){
    const fullNav = document.getElementById('fullNav');
    fullNav?.style.setProperty('display', 'none');
  }

  getCartSize()
  {
    this.productsService.getCartProducts().subscribe((response) => {
      this.productsData = response.filter((addedToCart => addedToCart.addedToCart == true));
      this.cartSize = this.productsData.length;
    });
  }

}
