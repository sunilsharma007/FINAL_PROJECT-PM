import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {UserComponent} from '../app/user/user.component';
import {PmComponent} from '../app/pm/pm.component';
import {AdminComponent} from '../app/admin/admin.component';
import {LoginComponent} from '../app/login/login.component';
import {RegisterComponent} from '../app/register/register.component';
import {RegisterUserComponent} from '../app/register-user/register-user.component';
import {UserListComponent} from '../app/user-list/user-list.component';
import {EmployeeComponent} from '../app/employee/employee.component';
import {ListTaskComponent} from '../app/list-task/list-task.component';
import {CompletedTaskComponent} from '../app/completed-task/completed-task.component';
import {InCompleteTaskComponent} from '../app/in-complete-task/in-complete-task.component';
import {CreateTaskComponent} from '../app/create-task/create-task.component';
import {HomePageComponent} from '../app/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent

  },

  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: '',
    // redirectTo: 'auth/login', 
    // pathMatch: 'full'
    //  redirectTo: 'homepage', 
    component:HomePageComponent ,      
     pathMatch: 'full'
  },
  {
    path: 'signupUser',
    component: RegisterUserComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'employeeList',
    component: EmployeeComponent
  },
  {
    path: 'tasks',
    component: ListTaskComponent
  },
  {
    path: 'completedTasks',
    component: CompletedTaskComponent
  },
  {
    path: 'pendingTasks',
    component: InCompleteTaskComponent
  },
  {
    path: 'createTask',
    component: CreateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
