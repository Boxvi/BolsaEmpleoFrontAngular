import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusuario } from 'src/app/data/interfaces/models/iusuario';
import Swal from 'sweetalert2';
import { PassRoleService } from '../services/pass-role.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: Iusuario = {
    username: '',
    password: '',
    email: '',
    telefono: '',
    estado: true,
    rol: ''
  };

  rolReceived: string = '';

  public registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private passRoleService: PassRoleService,
    private router: Router,
    private usuarioSerive: UsuarioService) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      estado: [true],
      rol: ['ROLE_ESTUDIANTE']
    });
  }

  ngOnInit(): void {
    this.passRoleService.roleTrigger.subscribe(data => {
      console.log('ROLE 🎋', data);
      this.rolReceived = data.data;
      this.usuario.rol = this.rolReceived
    })
  }

  register() {

    if (!this.registerForm.valid) {
      return;
    }
    console.log('Registered🎁', this.registerForm.value);
    this.usuarioSerive.signUp(this.registerForm.value).subscribe(r => {
      Swal.fire({
        icon: 'success',
        text: 'Usuario registrado'
      });
      this.router.navigateByUrl("/home");
    },
      err => {
        Swal.fire({
          icon: 'error',
          text: `${err.error.message}`
        })
      });

  }

}
