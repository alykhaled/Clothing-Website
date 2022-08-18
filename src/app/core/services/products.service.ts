import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductData } from "@core/models/interfaces/product-data";
import { User } from "@core/models/interfaces/user";
import { UserLoginRequest } from "@core/models/interfaces/userLoginRequest";
import { CookiesService } from "@core/utils/cookies.service";
import { environment } from "@environment";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ProductsService{
    constructor(
        private cookiesService: CookiesService,
        // private apiGatewayService: ApiGatewayService
        private http: HttpClient
      ) {}

    public notify = new BehaviorSubject<any>('');
    notifyObservable$ = this.notify.asObservable();
    cartSize = 0;
    public isAuthenticated() {
        return this.getToken() != null;
    }

    public getProducts()
    {
        return this.http.get(environment.baseUrl+"product/v1/all");
    }
    public getProduct(id:number)
    {
        return this.http.get<ProductData>(environment.baseUrl+"product/v1/product?id="+id);
    }

    public getCartProducts()
    {
        return this.http.get<ProductData[]>(environment.baseUrl+"product/v1/all")
    }
    public addToCart(id:number)
    {
        return this.http.put(environment.baseUrl+"product/v1/addtocart?id="+id,null).pipe(
            map((data) => {
                this.notify.next(data);
                return data;
            })
        );
    }
    public removeFromCart(id:number)
    {
        return this.http.put(environment.baseUrl+"product/v1/removefromcart?id="+id,null)
    }
    public getToken() {
        return this.cookiesService.getCookie('token');
    }
    public getByCategory(name:string)
    {
        return this.http.get<ProductData[]>(environment.baseUrl+"product/v1/category?clothingCategory="+name);
    }

}