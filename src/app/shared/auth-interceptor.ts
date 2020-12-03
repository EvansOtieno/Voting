import { Injectable } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent,HttpInterceptor,HttpHandler,HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { TokenStorageService } from '../Services/token-storage.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
 
const TOKEN_HEADER_KEY = "Authorization";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor(private router:Router,private token:TokenStorageService){}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authReq=req;
      const token = this.token.getToken();
      if(token != null){
          authReq = req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,'Bearer '+ token)});
          console.log(authReq);
        }
      return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x)))
      
    }
  handleAuthError(err: HttpErrorResponse): Observable<any>  {
    if(err.status==403){
      this.router.navigateByUrl("/login");
       return throwError(err);
    }else{
      return throwError(err.error.message);
    }

  }
}
    export const authInterceptorProviders=[
        {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true }
    ]