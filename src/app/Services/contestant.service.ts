import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contestant } from '../Models/contestant';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {
  private contestanturl: string = "http://localhost:8080/contestant"
  constructor(private httpclient: HttpClient) { }
  saveContestant(formdata: FormData): Observable<Contestant> {
    return this.httpclient.post<Contestant>(this.contestanturl, formdata);
  }
  getcontestants():Observable<Contestant[]>{
    return this.httpclient.get<Contestant[]>(this.contestanturl).pipe(map(response=>response))
  }
}
