import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ballot } from '../Models/ballot';

@Injectable({
  providedIn: 'root'
})
export class BallotService {
  private casturl: string = "http://localhost:8080/cast"
  constructor(private httpclient: HttpClient) { }
  updatevotes(ballot:Ballot):Observable<Ballot> {
    return this.httpclient.post<Ballot>(this.casturl,ballot);
  }
}
