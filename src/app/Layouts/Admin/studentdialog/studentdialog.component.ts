import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/Models/student';
import { DialogElementsComponent } from '../../dialog-elements/dialog-elements.component';

@Component({
  selector: 'app-studentdialog',
  templateUrl: './studentdialog.component.html',
  styleUrls: ['./studentdialog.component.css']
})
export class StudentdialogComponent {
  Halls: any = ['BuruBuru', 'CBD', 'Tatton'];
  Faculties: any = ['Science', 'Education', 'Health Science', 'Engineering'];
  hide = true;
 student:Student;
  constructor(public dialogRef: MatDialogRef<DialogElementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

 ngOnInit(): void {
   this.student=this.data.student;
 }

}
