import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Observable } from "rxjs";
import { AuthService } from "src/app/modules/auth/services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.getUser();
    const isAuthenticated = currentUser && currentUser.accessToken;
    if (isAuthenticated) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    return next.handle(req);
  }

} 