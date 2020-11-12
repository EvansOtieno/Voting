import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contestant } from 'src/app/Models/contestant';
import { Student } from 'src/app/Models/student';
import { ContestantService } from 'src/app/Services/contestant.service';
import { StudentService } from 'src/app/Services/student.service';
@Component({
  selector: 'app-cont-reg',
  templateUrl: './cont-reg.component.html',
  styleUrls: ['./cont-reg.component.css']
})
export class ContRegComponent implements OnInit {
  student: Student =new Student();
  contestant: Contestant =new Contestant();
  seat: any;
  Positions: any = ['Chair', 'V.Chair', 'SecGen', 'Academics', 'Halls','Faculty'];
  constructor(private studentservice: StudentService, private contestantservice: ContestantService,private router: Router) { }
  
  ngOnInit(): void {
  }
  findcont(){
    const email =  (<HTMLInputElement>document.getElementById("findemail")).value; 
    this.studentservice.getStudent(email).subscribe(data =>{this.student=data,console.log(data)});
   
  } 
}
