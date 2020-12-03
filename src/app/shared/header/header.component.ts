import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isloggedin=false;
  role='';
  user:User=new User;
  username='';

  constructor(private router:Router,public tokenstorage:TokenStorageService){}
  ngOnInit() {
  }

  logout():void{
    this.tokenstorage.signout();
    this.router.navigateByUrl("/home"); 
  }
}
