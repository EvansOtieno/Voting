import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs-compat';

import { map } from 'rxjs/operators';
import { Contestant } from 'src/app/Models/contestant';
import { Student } from 'src/app/Models/student';
import { ContestantService } from 'src/app/Services/contestant.service';
import { StudentService } from 'src/app/Services/student.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { VoteTimeService } from 'src/app/Services/vote-time.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @ViewChild('table') table: MatTable<Element>;
  contestants:Contestant[]=[];
  chairs: Contestant[] = [];
  vchairs: Contestant[] = [];
  secgens: Contestant[] = [];
  halls: Contestant[] = [];
  facultys: Contestant[] = [];
  academics: Contestant[] = [];
  isvisible:boolean=false;
  isloggedin:boolean=false;
  cdate:any;
  days:String=new String();
  hours:String=new String();
  minutes:String=new String();
  seconds:String=new String();
  displayedColumns: string[] = ['position', 'Photo', 'Name','Votes'];
  tokens:any;
  joke:any;
  user:Student=new Student();
  constructor(private httpclient: HttpClient,private timeservice: VoteTimeService,private token:TokenStorageService,private contestantservice:ContestantService,private studentservice:StudentService) {
    Observable.interval(15000).subscribe(x => {
      this.httpclient.get('https://api.chucknorris.io/jokes/random').pipe(map(response => response)).subscribe(data => { this.joke = data });
    });
   }

  ngOnInit(): void {
    this.httpclient.get('https://api.chucknorris.io/jokes/random').pipe(map(response => response)).subscribe(data => { this.joke = data });
    this.timeservice.getTime().subscribe(data => {
      this.cdate = new Date(data.stoptime).getTime();
    })
    this.isloggedin=!!this.token.getToken();
      this.tokens=this.token.getToken();
      this.user=this.token.getUser();
  }
  x =setInterval(()=>{
    var now=new Date().getTime();
    var distance=this.cdate -now;
    this.days= Math.floor(distance/(1000*60*60*24)) +" D";
    this.hours=Math.floor((distance % (1000*60*60*24)) / (1000*60*60)) +" H";
    this.minutes=Math.floor((distance % (1000*60*60)) /(1000*60)) + " M";
    this.seconds=Math.floor((distance %(1000*60))/1000) + " S";
    if(distance<0){
      clearInterval(this.x);
      this.contestantservice.getresults().subscribe(data=>{
        this.chairs = data.filter(x => x.position == 'Chair');
        this.vchairs = data.filter(x => x.position == 'V.Chair');
        this.secgens = data.filter(x => x.position == 'SecGen');
        this.academics = data.filter(x => x.position == 'Academics');
        this.halls= data.filter(x => x.position == this.user.residence);
        this.facultys= data.filter(x => x.position == this.user.faculty);
      });
      this.isvisible=true; 
    }
  });
  
}

    


