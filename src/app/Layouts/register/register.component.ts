import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  student: Student =new Student();
  Halls: any = ['BuruBuru', 'CBD', 'Tatton', 'Non-Resident'];
  Faculties: any = ['Science', 'Education', 'Health Science', 'Engineering'];
  hide = true;
  constructor(private studentservice: StudentService, private router:Router) { }
  
  ngOnInit(): void {
  }
  saveStudent(){
    console.log();
    this.studentservice.saveStudent(this.student).subscribe(
      data =>{
        console.log('response',data);
        this.router.navigateByUrl("/home");
      }
    )
  }
}
