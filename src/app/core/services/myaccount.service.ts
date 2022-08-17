import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@core/models/interfaces/user";
import { UserLoginRequest } from "@core/models/interfaces/userLoginRequest";
import { CookiesService } from "@core/utils/cookies.service";
import { environment } from "@environment";

@Injectable({
    providedIn: 'root',
})
export class MyAccountService{
    constructor(
        private cookiesService: CookiesService,
        private http: HttpClient
      ) {}

    public getProfile()
    {
        return this.http.get<User>(environment.baseUrl+"api/profile?email="+this.cookiesService.getCookie("email"));
    }


}