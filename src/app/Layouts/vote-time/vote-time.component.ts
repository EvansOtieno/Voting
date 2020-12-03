import { Component, OnInit} from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-vote-time',
  templateUrl: './vote-time.component.html',
  styleUrls: ['./vote-time.component.css']
})
export class VoteTimeComponent implements OnInit {
  
  mindate= moment(new Date()).format("YYYY-MM-DD[T]HH:mm");
  
  
  starttime:Date=new Date();
  stoptime:Date=new Date(); 

  startFormControl = new FormControl('', [
    Validators.required
   
  ]); 
  stopFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(){} 

  ngOnInit(): void {
  }
 
}