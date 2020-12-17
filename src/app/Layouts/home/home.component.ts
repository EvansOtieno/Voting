import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs-compat';

import { map } from 'rxjs/operators';
import { Time } from 'src/app/Models/time';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { VoteTimeService } from 'src/app/Services/vote-time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isvisible: boolean = false;
  cdate: any;
  days: String = new String();
  hours: String = new String();
  minutes: String = new String();
  seconds: String = new String();
  tokens: any;
  user: User = new User();
  time: Time = new Time();
  joke:any;
  constructor(private httpclient: HttpClient, private timeservice: VoteTimeService, private token: TokenStorageService, private router: Router) {
    Observable.interval(15000).subscribe(x => {
      this.httpclient.get('https://api.chucknorris.io/jokes/random').pipe(map(response => response)).subscribe(data => { this.joke = data });
    });
  }
  ngOnInit(): void {
    if (!!this.token.getToken() && this.token.getUser().voted) {
      this.router.navigateByUrl("/results");
    }
    this.httpclient.get('https://api.chucknorris.io/jokes/random').pipe(map(response => response)).subscribe(data => { this.joke = data });
    this.timeservice.getTime().subscribe(data => {
      this.time = data;
      this.cdate = new Date(data.starttime).getTime();
    })
    this.tokens = this.token.getToken();

  }
  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.cdate - now;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24)) + " D";
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " H";
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " M";
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000) + " S";
    if (distance < 0) {
      clearInterval(this.x);
      this.isvisible = true;
      if (!!this.token.getToken() && this.token.getUser().role == 'Admin') {
        this.router.navigateByUrl("/admin");
      } else {
        this.router.navigateByUrl("/vote");
      }
    }
  });
}
