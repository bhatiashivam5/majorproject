import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
