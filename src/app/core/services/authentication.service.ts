import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, UserToken } from "@core/models/interfaces/user";
import { UserLoginRequest } from "@core/models/interfaces/userLoginRequest";
import { UserRegisterRequest } from "@core/models/interfaces/userRegisterRequest";
import { CookiesService } from "@core/utils/cookies.service";
import { environment } from "@environment";
import { BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService{

    private loginUrl = '/auth/login'
    private registerUrl = '/auth/register'
    private Logged:boolean = false;
    public notify = new BehaviorSubject<any>('');
    notifyObservable$ = this.notify.asObservable();

    constructor(
        private cookiesService: CookiesService,
        // private apiGatewayService: ApiGatewayService
        private http: HttpClient,
      ) {}

    public isAuthenticated() {
        return this.getToken() != null;
    }

    public login(loginData: UserLoginRequest)
    {
        return this.http
        .post<UserToken>(environment.baseUrl+"api/auth/login",loginData).pipe(
            map((data: UserToken) => {
                this.cookiesService.setCookie("token", data.token, 10);
                this.cookiesService.setCookie("email", data.email, 10);
                this.Logged = true;
                this.notify.next(data);
                return data;
            })
        );
    }

    public register(registerData: UserRegisterRequest)
    {
        return this.http
        .post<UserToken>(environment.baseUrl+"api/auth/register",registerData).pipe(
            map((data: UserToken) => {
                this.notify.next(data);
                return data;
            })
        );
    }
    public getToken() {
        return this.cookiesService.getCookie('token');
    }

    public logout()
    {
        this.cookiesService.eraseCookie("token");
        this.cookiesService.eraseCookie("email");
        this.notify.next(null);
    }

    public isLogged()
    {
        return this.isLogged;
    }


}