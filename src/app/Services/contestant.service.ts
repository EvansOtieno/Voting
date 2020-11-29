import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ballot } from '../Models/ballot';
import { Contestant } from '../Models/contestant';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {
  private savecontestanturl: string = "http://localhost:8080/admin/contestant";
  private contestanturl: string = "http://localhost:8080/contestant";
  private resultsurl: string = "http://localhost:8080/results";
  constructor(private httpclient: HttpClient) { }
  saveContestant(formdata: FormData): Observable<Contestant> {
    return this.httpclient.post<Contestant>(this.savecontestanturl, formdata);
  }
  getcontestants(): Observable<Contestant[]> {
    return this.httpclient.get<Contestant[]>(this.contestanturl).pipe(map(response => response))
  }
  getresults(): Observable<Contestant[]> {
   return this.httpclient.get<Contestant[]>(this.resultsurl).pipe(map(response => response));
  }
}
