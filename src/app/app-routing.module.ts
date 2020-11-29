
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Layouts/about/about.component';
import { CastComponent } from './Layouts/cast/cast.component';
import { ContRegComponent } from './Layouts/cont-reg/cont-reg.component';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { LoginComponent } from './Layouts/login/login.component';
import { RegisterComponent } from './Layouts/register/register.component';
import { ResultsComponent } from './Layouts/results/results.component';
import { VoteTimeComponent } from './Layouts/vote-time/vote-time.component';
import { VoteComponent } from './Layouts/vote/vote.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path : 'home', component : VoteComponent},
  {path : 'dashboard', component : DashboardComponent,canActivate:[AuthGuard]},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'about', component : AboutComponent},
  {path : 'regcont', component : ContRegComponent,canActivate:[AuthGuard]},
  {path : 'confirm', component : CastComponent},
  {path : 'results', component : ResultsComponent},
  {path : 'time', component : VoteTimeComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { 
 }
