import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {SignupInfoUser} from '../auth/signup-info-user';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  form: any = {};
  signupInfoUser: SignupInfoUser;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfoUser = new SignupInfoUser(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.domain);

    this.authService.signUpUser(this.signupInfoUser).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
