import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iusuario } from 'src/app/data/interfaces/models/iusuario';
import { IResponseValidation } from 'src/app/data/interfaces/services/iresponse-validation.metadata';
import { ValidationService } from 'src/app/shared/services/validations/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: Iusuario = {
    username: '',
    password: '',
    email:'',
    telefono:'',
    estado: true,
    rol: 'ROLE_ADMINISTRADOR'
  };

  public registerForm:FormGroup;


  constructor(private formBuilder:FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password:['']
    });
  }

  ngOnInit(): void {
  }

}
