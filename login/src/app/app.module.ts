import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// new modules import
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { KidsComponent } from './kids/kids.component';
import { DashboardComponent } from './dashboard/dashboard.component'
//import dashboard routing module
import { DashboardRoutingModule} from './dashboard/dashboard-routing.module';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddressComponent } from './dashboard/address/address.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
// Forms and Reactive Forms Modules
import {ReactiveFormsModule } from '@angular/forms'


// MDB Angular Free
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    KidsComponent,
    DashboardComponent,
    SidenavComponent,
    LogoutComponent,
    AdmindashboardComponent,
    AddressComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    IconsModule,
    MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
