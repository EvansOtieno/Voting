import { Component, OnInit} from '@angular/core';
import { Contestant } from 'src/app/Models/contestant';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  contestants:Contestant[]=[];
  cont:Contestant=new Contestant();
  constructor() { }
  
  ngOnInit(): void {
    var myStorage = window.localStorage;
    this.contestants=JSON.parse(myStorage.getItem('cookie1'));
    console.log(this.contestants[0]);
  }

}
