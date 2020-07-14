import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { LoginInfo } from './login-info';
import { SignupInfo } from './signup-info';
import {SignupInfoUser} from './signup-info-user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8085/security/api/auth/signin';
  private signupUrl = 'http://localhost:8085/security/api/auth/signup';
  private signupUrl1 = 'http://localhost:8085/security/api/auth/signup';

  constructor(private http: HttpClient) {
  }
  attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignupInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  signUpUser(info: SignupInfoUser): Observable<string> {
    return this.http.post<string>(this.signupUrl1, info, httpOptions);
  }

}
