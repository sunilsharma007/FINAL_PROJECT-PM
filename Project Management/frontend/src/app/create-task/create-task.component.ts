import { Component, OnInit } from '@angular/core';
import {Task} from '../list-task/task';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = new Task();
  submitted = false;
//  todayDate =new Date();
//  todayDate=new Date();

  constructor(private userService: UserService, private router: Router) { 
    
  
  }

  ngOnInit() {
  }
  newTask(): void{
    this.submitted = false;
    this.task = new Task();

  }
  save(){
    this.userService.createTask(this.task).subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/tasks']);
  }



}
