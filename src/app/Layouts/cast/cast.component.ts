import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Contestant } from 'src/app/Models/contestant';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  contestants: Contestant[] = [];
  cont: Contestant = new Contestant();
  constructor(public dialog: MatDialog, private cookies: CookieService, private router: Router) { }
  displayedColumns: string[] = ['position', 'Photo', 'Name', 'Review'];
  footercolumn: string = 'button';
  ngOnInit(): void {
    var myStorage = window.localStorage;
    this.contestants = JSON.parse(myStorage.getItem('cookie1'));
  }
  openDialog(editposition: string): void {
    const dialogRef = this.dialog.open(DialogElementsComponent, {
      width: '250px',
      data: { contestants:this.contestants, editposition:editposition }
    });
    dialogRef.afterClosed().subscribe(result => {
      const index = this.contestants.findIndex(x => x.position === result.position);
      console.log(index);
      this.contestants.splice(index, 1, result);
      var myStorage = window.localStorage;
      myStorage.setItem("cookie1", JSON.stringify(this.contestants));
      window.location.reload();
    });
  }
} 
