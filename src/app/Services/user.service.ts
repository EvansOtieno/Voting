import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { Observable } from "rxjs";
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userurl: string="http://localhost:8080/updateuser";
  private passurl: string="http://localhost:8080/updatepassword";
  private reseturl: string="http://localhost:8080/reset";
  constructor(private httpclient: HttpClient) { }

  resetData():Observable<any>{
    return this.httpclient.get<any>(this.reseturl);
  }

  updateStudent(id:number):Observable<Student>{
    return this.httpclient.post<Student>(this.userurl, id);
  }

  updatePassword(std:User):Observable<User>{
    return this.httpclient.post<User>(this.passurl,std);
  }
}
