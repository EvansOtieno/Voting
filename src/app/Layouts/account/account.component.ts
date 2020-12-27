import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contestant } from 'src/app/Models/contestant';
import { Student } from 'src/app/Models/student';
import { User } from 'src/app/Models/user';
import { ContestantService } from 'src/app/Services/contestant.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:Student=new Student();
  hide=false;
  user2:Contestant=new Contestant();
  photo=false;
  us:User=new User();
  constructor(private toastr: ToastrService,private contservice:ContestantService ,private token:TokenStorageService,private userservice:UserService) { }

  ngOnInit(): void {
    this.user=this.token.getUser();
    this.user.password='';
   if(this.token.getUser().role="Contestant"){
    this.contservice.getContestant(this.user.id).subscribe(data=>{
      this.user2=data;
    })
   }else{
    
    this.photo=false;
   }
  }

  update(){
    console.log(this.user);
      this.us.email=this.user.email;
      this.us.id=this.user.id;
      this.us.role=this.user.role;
      this.us.password=this.user.password;
    this.userservice.updatePassword(this.us).subscribe(data=>{
      this.toastr.info("Password Changes", "Account" ,{
        timeOut :  3000,
        positionClass : 'toast-center-center'
      })
    },
    err=>{
      
    })
  }
}
