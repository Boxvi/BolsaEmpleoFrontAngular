import { Component, OnInit } from '@angular/core';
import { Ilogin } from 'src/app/data/interfaces/models/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: Ilogin = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  isValidForm() {
    return (this.loginForm.username.length > 0 && this.loginForm.password.length > 0);
  }

  cleanForm(){
    this.loginForm.username = '';
    this.loginForm.password = '';
  }

}
