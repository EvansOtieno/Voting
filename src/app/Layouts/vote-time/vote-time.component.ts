import { HttpClient } from "@angular/common/http";
import { Component, OnInit} from "@angular/core";
import * as moment from 'moment';
import { ToastrService } from "ngx-toastr";
import { Time } from "src/app/Models/time";
import { VoteTimeService } from "src/app/Services/vote-time.service";

@Component({
  selector: 'app-vote-time',
  templateUrl: './vote-time.component.html',
  styleUrls: ['./vote-time.component.css']
})
export class VoteTimeComponent implements OnInit {
  time:Time=new Time();
  mindate= moment(new Date()).format("YYYY-MM-DD[T]HH:mm");
  success=false;
  constructor(private httpclient: HttpClient,private toastr: ToastrService,private vts:VoteTimeService){} 

  ngOnInit(): void {
    
  }
 
  setTime(){
    
      this.vts.saveTime(this.time).subscribe(
        data=>{
          console.log(this.time.starttime);
         this.success=true;
         this.toastr.success("Schedule Set Successfuly", "Vote Time" ,{
          timeOut :  4000,
          positionClass : 'toast-center-center'
        })
        }
      )
  }

}