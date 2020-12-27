
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Layouts/about/about.component';
import { BoardComponent } from './Layouts/Admin/board/board.component';
import { CastComponent } from './Layouts/cast/cast.component';
import { ContRegComponent } from './Layouts/Admin/cont-reg/cont-reg.component';
import { DashboardComponent } from './Layouts/Admin/dashboard/dashboard.component';
import { HomeComponent } from './Layouts/home/home.component';
import { LoginComponent } from './Layouts/login/login.component';
import { RegisterComponent } from './Layouts/register/register.component';
import { ResultsComponent } from './Layouts/results/results.component';
import { VoteTimeComponent } from './Layouts/vote-time/vote-time.component';
import { VoteComponent } from './Layouts/vote/vote.component';
import { AuthGuard } from './Services/auth.guard';
import { NotFoundComponent } from './Layouts/not-found/not-found.component';
import { AccountComponent } from './Layouts/account/account.component';
import { ResetDatabaseComponent } from './Layouts/Admin/reset-database/reset-database.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'home'},
  {path : 'home', component : HomeComponent},
  {path : 'vote', component : VoteComponent},
  {path : 'admin', component : DashboardComponent,canActivate:[AuthGuard],children:[
    {path : 'board', component : BoardComponent},
    {path : 'time', component : VoteTimeComponent},
    {path : '',redirectTo: '/admin/board', pathMatch: 'full'},
    {path : 'regcont', component : ContRegComponent},
    {path : 'reset', component : ResetDatabaseComponent},
  ]},
  {path : 'login', component : LoginComponent},
  {path : 'profile', component : AccountComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'about', component : AboutComponent},
  {path : 'confirm', component : CastComponent,canActivate: [AuthGuard] },
  {path : 'results', component : ResultsComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { 
 }
