import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Contestant } from 'src/app/Models/contestant';
import { ContestantService } from 'src/app/Services/contestant.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-contestanttable',
  templateUrl: './contestanttable.component.html',
  styleUrls: ['./contestanttable.component.css']
})
export class ContestanttableComponent {
  private contestants:Contestant[]=[];
 displayedColumns: string[] = ['email', 'name', 'position', 'delete'];
  dataSource: MatTableDataSource<Contestant>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild('table') table: MatTable<Element>;

  constructor(private userservice:UserService,private contservice:ContestantService) {
    
    this.contservice.getcontestants().subscribe(
      data => {
        this.contestants=data;
        this.dataSource = new MatTableDataSource(data);
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

  delete(cont:Contestant){
   
    this.contservice.deleteContestant(cont.id).subscribe(data=>{
      console.log(data);
    })
    this.userservice.updateStudent(cont.id).subscribe();
    this.table.renderRows();
    window.location.reload();
  }

}
