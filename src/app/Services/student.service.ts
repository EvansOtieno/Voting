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
  private studenteurl: string="http://localhost:8080/studente"

  constructor(private httpclient: HttpClient) { }
  saveStudent(student:Student):Observable<Student>{
    return this.httpclient.post<Student>(this.studenturl, student);
  }
  getStudentbyemail(email: String):Observable<Student>{
    return this.httpclient.get<Student>(`${this.studenteurl}/${email}`).pipe(map(response => response));
  }
  getStudent(id: number):Observable<Student>{
    return this.httpclient.get<Student>(`${this.studenturl}/${id}`).pipe(map(response => response));
  }
  getstudents():Observable<Student[]>{
    return this.httpclient.get<Student[]>(this.studenturl).pipe(map(response=>response))
  }
}
