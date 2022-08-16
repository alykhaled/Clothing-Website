import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@core/services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            headers:  req.headers.append('Authorization',`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFsaWRtYW1kb3U3QGdtYWlsLmNvbSIsImV4cCI6MTY2MDcxNzA1MywiaWF0IjoxNjYwNjgxMDUzfQ.hWLrx6WPCHu3OQ0JGEv-D3cNuqZcxY17szlU0Cdf3yU`),
        });
        return next.handle(req);
    }
}