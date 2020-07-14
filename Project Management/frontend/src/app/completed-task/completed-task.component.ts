import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../list-task/task';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private userService: UserService, private router: Router){ }

  ngOnInit(){
    this.reloadData();
  }
  reloadData() {
    this.tasks = this.userService.getCompletedTaskList();
  }
  taskDelete(id: number) {
    this.userService.taskDelete(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error));

  }
}
