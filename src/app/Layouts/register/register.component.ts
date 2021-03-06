import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  Halls: any = ['BuruBuru', 'CBD', 'Tatton'];
  Faculties: any = ['Science', 'Education', 'Health Science', 'Engineering'];
  hide = true;
  errormsg='';
  issuccessfull=false;
  issignupfailed=false;
  constructor(private toastr: ToastrService,private authservice:AuthenticationService,private studentservice: StudentService, private router:Router) { }
  
  ngOnInit(): void {
  }
  saveStudent(){
    this.authservice.register(this.student).subscribe(
      data =>{
        console.log(data);
        this.issuccessfull=true;
        this.issignupfailed=false; 
        this.router.navigateByUrl("/home");
        this.toastr.info("Registration Succesful Login to Proceed", "Registration" ,{
          timeOut :  3000,
          positionClass : 'toast-center-center'
        })
      },
      err =>{
        this.errormsg=err;
        this.issignupfailed=true;
        this.toastr.error(err, "Registration Failed" ,{
          timeOut :  3000,
          positionClass : 'toast-center-center'
        })
      }
    )
  }
}
