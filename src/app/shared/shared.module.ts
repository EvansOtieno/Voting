import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../Layouts/home/home.component';
import { LoginComponent } from '../Layouts/login/login.component';
import { RegisterComponent } from '../Layouts/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from '../Layouts/about/about.component';
import { ContRegComponent } from '../Layouts/Admin/cont-reg/cont-reg.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { VoteComponent } from '../Layouts/vote/vote.component';
import { CastComponent } from '../Layouts/cast/cast.component';
import { CookieService } from 'ngx-cookie-service';
import { DialogElementsComponent } from '../Layouts/dialog-elements/dialog-elements.component';
import { ResultsComponent } from '../Layouts/results/results.component';
import { VoteTimeComponent } from '../Layouts/vote-time/vote-time.component';
import { DashboardComponent } from '../Layouts/Admin/dashboard/dashboard.component';
import { AccountComponent } from '../Layouts/account/account.component';
import { ChartsModule } from 'ng2-charts';
import { authInterceptorProviders } from "./auth-interceptor";
import { BoardComponent } from "../Layouts/Admin/board/board.component";
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { ChartsComponent } from '../Layouts/Admin/charts/charts.component';
import { ContestanttableComponent } from '../Layouts/Admin/contestanttable/contestanttable.component';
import { StudentdialogComponent } from '../Layouts/Admin/studentdialog/studentdialog.component';
import { StudenttableComponent } from '../Layouts/Admin/studenttable/studenttable.component';
import { ResetDatabaseComponent } from '../Layouts/Admin/reset-database/reset-database.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    ResetDatabaseComponent,
    StudentdialogComponent,
    ChartsComponent,
    StudenttableComponent,
    ContestanttableComponent,
    BoardComponent,
    VoteTimeComponent,
    DashboardComponent,
    AccountComponent,
    ResultsComponent,
    DialogElementsComponent,
    CastComponent,
    VoteComponent,
    ContRegComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    ToastrModule,
    StudentdialogComponent,
    ChartsComponent,
    StudenttableComponent,
    ContestanttableComponent,
    BoardComponent,
    VoteTimeComponent,
    DashboardComponent,
    AccountComponent,
    ResultsComponent,
    DialogElementsComponent,
    VoteComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContRegComponent,
    CastComponent,
    ResetDatabaseComponent
  ],
  providers: [
    CookieService,
    authInterceptorProviders,
  ]
})
export class SharedModule {

}
