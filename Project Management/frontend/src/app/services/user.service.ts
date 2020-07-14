import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8085/security/api/test/user';
  private pmUrl = 'http://localhost:8085/security/api/test/pm';
  private adminUrl = 'http://localhost:8085/security/api/test/admin';
  private getUserUrl = 'http://localhost:8085/security/api/auth/user/role/ROLE_PM';
  private getEmployeeUrl = 'http://localhost:8085/security/api/auth/user/role/ROLE_USER';
  private getTaskUrl = 'http://localhost:8085/api/task/tasks';
  private getCompletedTask = 'http://localhost:8085/api/task/tasksByStatus/true';
  private pendingTask = 'http://localhost:8085/api/task/tasksByStatus/false';
  private cTask = 'http://localhost:8085/api/task/addTask';
  private baseUrl1 = 'http://localhost:8085/api/task/updateTask';
  private deleteUrl = 'http://localhost:8085/api/task/deleteTask';
  constructor(private http: HttpClient) { }


  taskDelete(id: number): Observable<any>{

    return this.http.delete(`${this.deleteUrl}/${id}`, { responseType: 'text' });
  }
  taskUpdate(id: number): Observable<object> {
    return this.http.put(`${this.baseUrl1}/${id}`, { responseType: 'text' });
  }

  createTask(task: object): Observable<object>{
    return this.http.post(this.cTask, task);
  }

  getPendingTaskList(): Observable<any> {
    return this.http.get(this.pendingTask);
  }
  getCompletedTaskList(): Observable<any> {
    return this.http.get(this.getCompletedTask);
  }
  getUserList(): Observable<any> {
    return this.http.get(this.getUserUrl);
  }
  getTaskList(): Observable<any> {
    return this.http.get(this.getTaskUrl);
  }
  getEmployeeList(): Observable<any> {
    return this.http.get(this.getEmployeeUrl);
  }
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }



}
