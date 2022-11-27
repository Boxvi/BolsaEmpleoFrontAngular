import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { Iusuario } from 'src/app/data/interfaces/models/iusuario';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { PassRoleService } from 'src/app/modules/auth/services/pass-role.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  public usuario: Iusuario | any = {};
  private usuario_id: number = 0;
  public rolReceived: string = '';
  constructor(private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private passRoleService: PassRoleService) { }

  ngOnInit(): void {
    this.usuario_id = this.authService.getUser().usuario_id;
    this.usuarioService.getResumenByUsuarioId(this.usuario_id).subscribe(d => {
      this.usuario = d;
      this.usuario.password = ''
    })
    this.rolReceived = this.passRoleService.getRol();
  }

  registrarUsuario() {
    console.log('🧵 Usuario Actualizado', this.usuario);
    this.usuarioService.edit(this.usuario_id, this.usuario).subscribe(d => {

      console.log('🎠Role', d.data?.rol?.nombre);
      let alert = new Alert(d.error, d.icon, d.message, this.router);
      alert.response(this.redirect(d?.data?.rol?.nombre));

      /* login service */

    })
  }

  eliminarUsuario(id: number) {

  }

  redirect(role: string) {
    switch (role) {
      case 'ROLE_ESTUDIANTE':
        return '/panel/estudiante';
      case 'ROLE_EMPRESA':
        return '/panel/empresa';
      case 'ROLE_ADMINISTRADOR':
        return '/panel/administrador';
    }
    return '';
  }

  cancel() {
    this.rolReceived = this.authService.getUser().authorities[0].authority;
    this.router.navigateByUrl(this.redirect(this.rolReceived));

  }

}
