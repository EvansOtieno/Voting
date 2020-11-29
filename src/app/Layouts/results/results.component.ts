import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Contestant } from 'src/app/Models/contestant';
import { ContestantService } from 'src/app/Services/contestant.service';
import { StudentService } from 'src/app/Services/student.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

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
  academics: Contestant[] = [];
  isvisible:boolean=false;
  cdate=new Date("november 19,2020 15:07:00").getTime();
  days:String=new String();
  hours:String=new String();
  minutes:String=new String();
  seconds:String=new String();
  displayedColumns: string[] = ['position', 'Photo', 'Name','Votes'];
  tokens:any;
  constructor(private token:TokenStorageService,private contestantservice:ContestantService,private studentservice:StudentService) { }

  ngOnInit(): void {
      this.tokens=this.token.getToken();
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
      });
      this.isvisible=true; 
    }
  });
  
}

    


