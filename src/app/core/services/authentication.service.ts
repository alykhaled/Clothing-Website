import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, UserToken } from "@core/models/interfaces/user";
import { UserLoginRequest } from "@core/models/interfaces/userLoginRequest";
import { CookiesService } from "@core/utils/cookies.service";
import { environment } from "@environment";
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService{
    private loginUrl = '/auth/login'
    private registerUrl = '/auth/register'
    private Logged:boolean = false;
    constructor(
        private cookiesService: CookiesService,
        // private apiGatewayService: ApiGatewayService
        private http: HttpClient,
      ) {}

    public isAuthenticated() {
        return this.getToken() != null;
    }

    public authenticate(loginData: UserLoginRequest, login: boolean)
    {
        return this.http
        .post<UserToken>(environment.baseUrl+"api/auth/login",loginData).pipe(
            map((data: UserToken) => {
                this.cookiesService.setCookie("token", data.token, 10);
                this.cookiesService.setCookie("email", data.email, 10);
                this.Logged = true;
                return data;
            })
        );
    }
    public getToken() {
        return this.cookiesService.getCookie('token');
    }

    public isLogged()
    {
        return this.isLogged;
    }
}