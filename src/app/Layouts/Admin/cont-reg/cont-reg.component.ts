import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  public photo:any= File;
  student: Student = new Student();
  contestant: Contestant = new Contestant();
  Positions: any = ['Chair', 'V.Chair', 'SecGen', 'Academics'];
  constructor(private studentservice: StudentService, private contestantservice: ContestantService, private router: Router) { }

  ngOnInit(): void {
  }
 
  findcont() {
    const email = (<HTMLInputElement>document.getElementById("findemail")).value;
    this.studentservice.getStudentbyemail(email).subscribe(data => { this.student = data, console.log(data) });
  }
  onFileSelected(event) {
    this.photo = event.target.files[0];
    console.log(this.photo);
   
  }
  savecont(f: NgForm) {
    this.contestant.id=this.student.id;
    this.contestant.position=f.controls['position'].value;
    const fd = new FormData();
    console.log(this.photo);
    fd.append("image",this.photo);
    fd.append("contestant",JSON.stringify(this.contestant));
    this.contestantservice.saveContestant(fd).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl("/home");
      }
    )
  }
}

