import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from 'src/app/data/interfaces/models/ilogin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*   public loginForm: Ilogin = {
      username: '',
      password: ''
    }; */
  public loginForm: FormGroup;
  public loginSubmitted = false;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /*   isValidForm() {
      return (this.loginForm.username.length > 0 && this.loginForm.password.length > 0);
    } */

  cleanForm() {
    this.loginSubmitted = false;
    this.loginForm.get('username')?.setValue('');
    this.loginForm.get('password')?.setValue('');
  }

  get fm() {
    return this.loginForm.controls;
  }

  authenticate() {
    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    console.log('Authenticated🎈', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(r => {
      console.log(r);
    });

  }

}