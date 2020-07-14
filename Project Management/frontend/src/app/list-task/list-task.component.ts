import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import { Task } from './task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks: Observable<Task[]>;

  constructor(private userService: UserService, private router: Router){ }

  ngOnInit(){
    this.reloadData();
  }
  reloadData() {
    this.tasks = this.userService.getTaskList();
  }
  taskUpdate(id: number){
    this.userService.taskUpdate(id).subscribe(data => { console.log(data);
                                                        this.reloadData(); },
      error => console.log(error));
  }
  taskDelete(id: number){
    this.userService.taskDelete(id).subscribe(data => { console.log(data);
                                                        this.reloadData(); }, error => console.log(error));

  }
}
