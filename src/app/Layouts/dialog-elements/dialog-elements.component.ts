import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Contestant } from "src/app/Models/contestant";
@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.css']
})
export class DialogElementsComponent implements OnInit {
 
  public contestants: Contestant[]=[];
  public pos: string;
  constructor(private cookieservice:CookieService, public dialogRef: MatDialogRef<DialogElementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contestant) { }

  ngOnInit(): void {
    var contstorage = window.localStorage;
    this.contestants=JSON.parse(contstorage.getItem("cookie"));
   this.pos= this.cookieservice.get("editposition");
  }

}
