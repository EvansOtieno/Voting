import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';
import { StudentdialogComponent } from '../studentdialog/studentdialog.component';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent {
  private students: Student[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<Element>;

  displayedColumns: string[] = ['email', 'name', 'faculty', 'residence', 'edit', 'delete'];
  dataSource: MatTableDataSource<Student>;

  constructor( public dialog: MatDialog,private studentservice: StudentService) {
    this.studentservice.getstudents().subscribe(
      data => {
        this.students = data;
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(student: Student): void {
    const dialogRef = this.dialog.open(StudentdialogComponent, {
      width: '250px',
      data: { student:student}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      const index = this.students.findIndex(x => x.email === result.email);
      this.students[index]=result;
      this.table.renderRows();
    });
  }

  delete(std:Student){
    this.studentservice.deleteStudent(std.id).subscribe(data=>{
      console.log(data);
    });
    window.location.reload();
  }
}
