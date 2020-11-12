import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { SharedModule } from "../shared.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  xsm:Observable<boolean>;
  sm:Observable<boolean>;
  md:Observable<boolean>;
  l:Observable<boolean>;
  constructor(
    private breakpointobserver :BreakpointObserver
  ){}
  ngOnInit() {
    this.xsm= this.breakpointobserver.observe(['(max-width: 575.98px)']).pipe(map(({matches})=>matches));
   this.sm= this.breakpointobserver.observe(['(max-width: 767.98px)']).pipe(map(({matches})=>matches));
   this.md= this.breakpointobserver.observe(['(max-width: 991.98px)']).pipe(map(({matches})=>matches));
   this.l= this.breakpointobserver.observe(['(max-width: 1199.98px)']).pipe(map(({matches})=>matches));
  }

}
