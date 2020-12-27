import {  Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Observable } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  conts:number;
  std:number;
  votedp:number;
  voted:number;
  constructor(private httpclient: HttpClient,private studentservice:StudentService){
    Observable.interval(60000).subscribe(x => {
      this.studentservice.getstudents().subscribe(data=>{
      
        this.std=data.length; 
        this.conts=data.filter(x => x.role == 'Contestant').length;
        this.voted=data.filter(x => x.voted == true).length;
        this.votedp= Math.round((this.voted/this.std )*100);
      })
    });
  }

  ngOnInit(): void {
    this.studentservice.getstudents().subscribe(data=>{
      
      this.std=data.length; 
      this.conts=data.filter(x => x.role == 'Contestant').length;
      this.voted=data.filter(x => x.voted == true).length;
      this.votedp= Math.round((this.voted/this.std )*100);
    })
  }
}