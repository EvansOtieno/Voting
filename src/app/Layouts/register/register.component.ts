import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { AuthenticationService } from 'src/app/Services/authentication.service';
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
  errormsg='';
  issuccessfull=false;
  issignupfailed=false;
  submitted=false;
  constructor(private authservice:AuthenticationService,private studentservice: StudentService, private router:Router) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.minLength(5),
  ]);
  ngOnInit(): void {
  }
  saveStudent(){
    this.authservice.register(this.student).subscribe(
      data =>{
        this.issuccessfull=true;
        this.issignupfailed=false;
        this.submitted=false; 
        this.router.navigateByUrl("/home");
      },
      err =>{
        this.submitted=true;
        this.errormsg=err;
        this.issignupfailed=false;
      }
    )
  }
}
