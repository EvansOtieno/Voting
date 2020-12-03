import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isvisible:boolean=false;
  cdate=new Date("december 1,2020 16:00:00").getTime();
  days:String=new String();
  hours:String=new String();
  minutes:String=new String();
  seconds:String=new String();
  tokens:any;
  user:User=new User();

  constructor(private token:TokenStorageService,private router:Router) { }
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
    this.isvisible=true; 
    if( !!this.token.getToken() && this.token.getUser().role=='Admin'){
      this.router.navigateByUrl("/admin");
    }else{
      this.router.navigateByUrl("/vote");
    } 
  }
});
}
