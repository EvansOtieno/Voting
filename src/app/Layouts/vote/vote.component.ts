import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  private student: Student = new Student();
  constructor(private studentservice: StudentService, private contestantservice: ContestantService) { }


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
        })
      }
    );

    ;
  }

}
