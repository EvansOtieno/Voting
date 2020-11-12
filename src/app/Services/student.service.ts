import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studenturl: string="http://localhost:8080/student"

  constructor(private httpclient: HttpClient) { }
  saveStudent(student:Student):Observable<Student>{
    return this.httpclient.post<Student>(this.studenturl, student);
  }
  getStudent(email: String):Observable<Student>{
    return this.httpclient.get<Student>(`${this.studenturl}/${email}`).pipe(map(response => response));
  }
}
