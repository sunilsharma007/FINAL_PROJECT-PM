import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../list-task/task';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-in-complete-task',
  templateUrl: './in-complete-task.component.html',
  styleUrls: ['./in-complete-task.component.css']
})
export class InCompleteTaskComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tasks = this.userService.getPendingTaskList();
  }

  taskUpdate(id: number) {
    this.userService.taskUpdate(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }


}
