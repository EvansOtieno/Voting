import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contestant } from 'src/app/Models/contestant';
import { Student } from 'src/app/Models/student';
import { ContestantService } from 'src/app/Services/contestant.service';
import { StudentService } from 'src/app/Services/student.service';
@Component({
  selector: 'app-cont-reg',
  templateUrl: './cont-reg.component.html',
  styleUrls: ['./cont-reg.component.css']
})
export class ContRegComponent implements OnInit {
  visible: boolean = false;
  public photo: any = File;
  searchemail: string;
  student: Student = new Student();
  contestant: Contestant = new Contestant();
  Positions: any = ['Chair', 'V.Chair', 'SecGen', 'Academics'];
  constructor(private toastr: ToastrService, private studentservice: StudentService, private contestantservice: ContestantService, private router: Router) { }

  ngOnInit(): void {
  }

  findcont() {
    this.studentservice.getStudentbyemail(this.searchemail).subscribe(data => {
      this.student = data, this.visible = true, this.toastr.success(" Student Found", "Search Student", {
        timeOut: 3000,
        positionClass: 'toast-center-center'
      });
    },
    err =>{
     this.visible=false,
     this.toastr.error(err, "Search Student", {
      timeOut: 3000,
      positionClass: 'toast-center-center'
    })
      
    });
  }
  onFileSelected(event) {
    this.photo = event.target.files[0];

  }
  savecont(f: NgForm) {
    this.contestant.id = this.student.id;
    this.contestant.position = f.controls['position'].value;
    const fd = new FormData();
    fd.append("image", this.photo);
    fd.append("contestant", JSON.stringify(this.contestant));
    this.contestantservice.saveContestant(fd).subscribe(
      data => {
        this.router.navigateByUrl("/home");
      }
    )
  }
}

