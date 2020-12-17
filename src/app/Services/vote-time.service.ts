import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '../Models/time';

@Injectable({
  providedIn: 'root'
})
export class VoteTimeService {
  private timeurl: string="http://localhost:8080/time"
  constructor(private httpclient:HttpClient) { }

  saveTime(time:Time):Observable<Time>{
    console.log(time);
    return this.httpclient.post<Time>(this.timeurl, time);
  }
  getTime():Observable<Time>{
    return this.httpclient.get<Time>(this.timeurl).pipe(map(response => response));
  }
}
