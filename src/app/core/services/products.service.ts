import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductData } from "@core/models/interfaces/product-data";
import { User } from "@core/models/interfaces/user";
import { UserLoginRequest } from "@core/models/interfaces/userLoginRequest";
import { CookiesService } from "@core/utils/cookies.service";
import { environment } from "@environment";

@Injectable({
    providedIn: 'root',
})
export class ProductsService{
    constructor(
        private cookiesService: CookiesService,
        // private apiGatewayService: ApiGatewayService
        private http: HttpClient
      ) {}

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
    public getToken() {
        return this.cookiesService.getCookie('token');
    }
}