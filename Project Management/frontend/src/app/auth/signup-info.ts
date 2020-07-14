export class SignupInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;
  domain: string;



  constructor(name: string, username: string, email: string, password: string, domain: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = ['pm'];
    this.domain = domain;

  }
}
