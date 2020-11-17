import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Contestant } from 'src/app/Models/contestant';
import { Student } from 'src/app/Models/student';
import { ContestantService } from 'src/app/Services/contestant.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  contestants: Contestant[] = [];
  contestantss: Contestant[] = [];
  contestant:Contestant;
  chairs:Contestant[]=[];
  vchairs:Contestant[]=[];
  secgens:Contestant[]=[];
  academics:Contestant[]=[];
  halls:Contestant[]=[];
  faculties:Contestant[]=[];
   chai:Contestant;
  vchai:Contestant;
  secge:Contestant;
  academi:Contestant;
  hal:Contestant;
  facult:Contestant;
  private student: Student = new Student();
  constructor(private cookie:CookieService ,private studentservice: StudentService, private contestantservice: ContestantService,private router:Router) { }

  ngOnInit(): void {
    this.contestantservice.getcontestants().subscribe(
      data => {
        this.contestants = data;
        this.contestants.forEach(value => {
          this.studentservice.getStudent(value.id).subscribe(
            data => {
              this.student = data;
              
              value.name = this.student.firstname + ' ' + this.student.lastname;
            }
          )
        });
        this.chairs=this.contestants.filter(x => x.position == 'Chair');
        this.vchairs=this.contestants.filter(x => x.position == 'V.Chair');
        this.secgens=this.contestants.filter(x => x.position == 'SecGen');
        this.academics=this.contestants.filter(x => x.position == 'Academics');
        this.halls=this.contestants.filter(x => x.position == 'Halls');
        this.faculties=this.contestants.filter(x => x.position == 'Faculty');
      }
    );

    ;
  }
  confirm() {
   this.contestantss.push(this.chai);
   this.contestantss.push(this.vchai);
   this.contestantss.push(this.academi);
   this.contestantss.push(this.hal);
   this.contestantss.push(this.facult);
   this.contestantss.push(this.secge);
   var myStorage = window.localStorage;
   myStorage.setItem("cookie1",JSON.stringify(this.contestantss));
   this.router.navigateByUrl("/confirm");
  }
}
