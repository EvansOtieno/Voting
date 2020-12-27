import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-reset-database',
  templateUrl: './reset-database.component.html',
  styleUrls: ['./reset-database.component.css']
})
export class ResetDatabaseComponent implements OnInit {

  constructor(private toastr: ToastrService,private userservice:UserService) { }

  ngOnInit(): void {
  }
 reset(){
   this.userservice.resetData().subscribe(data=>{
   
    this.toastr.info(data.message, "Database" ,{
      timeOut :  3000,
      positionClass : 'toast-center-center'
    })
   })

 }

}
