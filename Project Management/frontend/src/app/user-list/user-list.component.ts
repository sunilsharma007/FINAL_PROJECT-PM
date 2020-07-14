import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService, private router: Router){ }

ngOnInit(){
  this.reloadData();
  }
reloadData() {
  this.users = this.userService.getUserList();
}
}
