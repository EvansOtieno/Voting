import { HttpClient } from "@angular/common/http";
import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { FormControl} from "@angular/forms";
import * as moment from 'moment';
@Component({
  selector: 'app-vote-time',
  templateUrl: './vote-time.component.html',
  styleUrls: ['./vote-time.component.css']
})
export class VoteTimeComponent implements OnInit {
  @ViewChild("picker") picker: any;

  public date: Date;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;

 
  public dateControl = new FormControl(new Date());
  public dateControlMinMax = new FormControl(new Date());

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

  constructor(private http: HttpClient, private zone: NgZone) {}

  ngOnInit() {
    this.date = new Date();
    this.minDate=new Date();
  }

  closePicker() {
    this.picker.cancel();
  }
}