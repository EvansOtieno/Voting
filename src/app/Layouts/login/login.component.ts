import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 isloggedin=false;
 isloginfailed=false;
 role='';
 errormsg='';
 user:User=new User();
 hide = true;

 emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
passwordFormControl = new FormControl('', [
  Validators.minLength(5),
]);

  constructor(private toastr: ToastrService,private location: Location,private route: ActivatedRoute, private authservice: AuthenticationService,private tokenstorage:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.isloggedin=!!this.tokenstorage.getToken();
    if(this.isloggedin){
      this.isloggedin=true;
    }
  }

    login(){
      this.authservice.login(this.user).subscribe(
        data=>{
          this.tokenstorage.saveToken(data.jwt);
          this.tokenstorage.saveUser(data.user);
 
          this.isloggedin=true;
          this.isloginfailed=false;
          this.toastr.success("Login Sucess", "Login" ,{
            timeOut :  3000,
            positionClass : 'toast-center-center'
          })
          if (data.user.role=='Admin'){
            console.log("Admin")
            this.router.navigateByUrl("/admin");
          }else if(data.user.voted==true && data.user.role!='Admin'){
            this.router.navigateByUrl("/results");
          }
          else { 
            this.location.back(); 
          }
         
        },
        err =>{
          this.errormsg=err;
          console.log(this.errormsg);
          this.isloginfailed=true;
        }
      )
    }
}
