import { Component, OnInit } from '@angular/core';
import { faSearch,faUser,  faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faAngry} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AuthenticationService } from '@core/services';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUser = faUser;
  isLogged:boolean = false;
  ngOnInit(): void {
    this.isLogged = this.authService.isAuthenticated();
  }
  ele = document.getElementById('shopItem');
  viewNav(){
    const fullNav = document.getElementById('fullNav');
    fullNav?.style.setProperty('display', 'flex');
    fullNav?.style.setProperty('justify-content', 'space-between');
    fullNav?.style.setProperty('animation', 'showNav 300ms forwards');
  }
  hideNav(){
    const fullNav = document.getElementById('fullNav');
    fullNav?.style.setProperty('display', 'none');
  }

}
