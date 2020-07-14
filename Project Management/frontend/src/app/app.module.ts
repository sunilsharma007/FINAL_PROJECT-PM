import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { InCompleteTaskComponent } from './in-complete-task/in-complete-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    RegisterUserComponent,
    UserListComponent,
    EmployeeComponent,
    ListTaskComponent,
    CompletedTaskComponent,
    InCompleteTaskComponent,
    CreateTaskComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
