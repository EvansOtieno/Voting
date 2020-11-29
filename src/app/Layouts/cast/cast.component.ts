import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Contestant } from 'src/app/Models/contestant';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';
import { Location } from '@angular/common';
import { BallotService } from 'src/app/Services/ballot.service';
import { Ballot } from 'src/app/Models/ballot';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  @ViewChild('table') table: MatTable<Element>;
  contestants: Contestant[] = [];
  cont: Contestant = new Contestant();
  ballot: Ballot = new Ballot();
  constructor(private ballotservice: BallotService, private _location: Location, public dialog: MatDialog, private cookies: CookieService, private router: Router) { }
  displayedColumns: string[] = ['position', 'Photo', 'Name', 'Review'];
  footercolumn: string = 'button';
  ngOnInit(): void {
    var myStorage = window.localStorage;
    this.contestants = JSON.parse(myStorage.getItem('cookie1'));
  }
  openDialog(editposition: string): void {
    const dialogRef = this.dialog.open(DialogElementsComponent, {
      width: '250px',
      data: { contestants: this.contestants, editposition: editposition }
    });
    dialogRef.afterClosed().subscribe(result => {
      const index = this.contestants.findIndex(x => x.position === result.position);
      this.contestants.splice(index, 1, result);
      var myStorage = window.localStorage;
      myStorage.setItem("cookie1", JSON.stringify(this.contestants));
      this.table.renderRows();
    });
  }
  back() {
    this._location.back();
  }
  cast(conts:Contestant[]) {

    this.ballot.chair=conts[0];
    this.ballot.vchair=conts[1];
    this.ballot.secgen=conts[2];
    this.ballot.academics=conts[3];
    this.ballot.faculty=conts[4];
    this.ballot.halls=conts[5];

    this.ballotservice.updatevotes(this.ballot).subscribe(
      data => {
        this.router.navigateByUrl("/results");
      }
    );
  
  }
}

