
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Layouts/about/about.component';
import { ContRegComponent } from './Layouts/cont-reg/cont-reg.component';
import { HomeComponent } from './Layouts/home/home.component';
import { LoginComponent } from './Layouts/login/login.component';
import { RegisterComponent } from './Layouts/register/register.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'about', component : AboutComponent},
  {path : 'regcont', component : ContRegComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { 
 }
