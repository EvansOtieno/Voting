
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Layouts/about/about.component';
import { CastComponent } from './Layouts/cast/cast.component';
import { ContRegComponent } from './Layouts/cont-reg/cont-reg.component';
import { HomeComponent } from './Layouts/home/home.component';
import { LoginComponent } from './Layouts/login/login.component';
import { RegisterComponent } from './Layouts/register/register.component';
import { VoteComponent } from './Layouts/vote/vote.component';

const routes: Routes = [
  {path : 'home', component : VoteComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'about', component : AboutComponent},
  {path : 'regcont', component : ContRegComponent},
  {path : 'confirm', component : CastComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { 
 }
