import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const authurl="http://localhost:8080/auth/"
const httpoptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(data):Observable<any>{
    return this.http.post(authurl + 'login',{email:data.email,password:data.password},httpoptions)
  }

  register(data):Observable<any>{
    return this.http.post(authurl + 'register',data,httpoptions)
  }
}
