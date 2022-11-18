import { Component, OnInit } from '@angular/core';
import { Ilogin } from 'src/app/data/interfaces/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:Ilogin = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
