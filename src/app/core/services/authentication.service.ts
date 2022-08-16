import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@core/models/interfaces/user";
import { UserLoginRequest } from "@core/models/interfaces/userLoginRequest";
import { environment } from "@environment";

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService{
    private loginUrl = '/auth/login'
    private registerUrl = '/auth/register'

    constructor(
        // private cookiesService: CookiesService,
        // private apiGatewayService: ApiGatewayService
        private http: HttpClient
      ) {}

    public isAuthenticated() {
        return this.getToken() != null;
    }

    public authenticate(loginData: UserLoginRequest, login: boolean)
    {
        return this.http.post(environment.baseUrl+"auth/login/",loginData);
    }
    public getToken() {
        // return this.cookiesService.getCookie('token');
    }
}