import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenstorage:TokenStorageService,private router:Router){}
  canActivate():boolean{
    if(!!this.tokenstorage.getToken()){
     return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
