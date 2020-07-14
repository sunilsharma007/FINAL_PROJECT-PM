import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(){
    this.reloadData();
  }

reloadData(){
    this.employees = this.userService.getEmployeeList();
  }

}
