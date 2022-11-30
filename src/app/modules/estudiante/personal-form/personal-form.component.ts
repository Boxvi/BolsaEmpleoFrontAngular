import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ESTADO_CIVIL_OPCIONES } from 'src/app/data/constants/ui/estado-civil-select.const';
import { ICiudad } from 'src/app/data/interfaces/models/iciudad';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { CiudadService } from 'src/app/data/services/api/ciudad.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  public ciudades: ICiudad[] = [];
  public estadosCivil = ESTADO_CIVIL_OPCIONES;
  public estudiante_id: number;
  public estudiante: IEstudiante | any = {/*     nombres: '',apellidos: '' */ };
  public cedulaValidator = false;

  constructor(private route: ActivatedRoute, private ciudadService: CiudadService,
    private estudianteService: EstudianteService,
    private authService: AuthService,
    private router: Router) {
    this.estudiante_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ciudadService.getAll().subscribe(d => {
      this.ciudades = d;
    })
    this.estudiante.username = this.authService.getUser().username;
    console.log(this.estudiante);
    if (this.estudiante_id) {
      this.estudianteService.getSummaryByEstudianteId(this.estudiante_id).subscribe(r => {
        this.estudiante = r;
      })
    }
  }

  registrarEstudiante() {
    if (this.estudiante_id) {
      // actualizamos

      this.estudianteService.edit(this.estudiante_id, this.estudiante).subscribe(r => {
        console.log('🎑Actualizando...');
        this.response(r.error, r.icon, r.message);
      })

    } else {
      this.estudianteService.save(this.estudiante).subscribe(
        r => {
          this.response(r.error, r.icon, r.message);
        }
      )
    }

  }

  response(state: boolean, icon: any, text: any) {
    Swal.fire({
      icon: icon,
      text: text
    })
    if (!state) {
      this.router.navigateByUrl('/panel/estudiante');
    }
  }

  validateCedula(cedula: string) {
    let rightCedula = false;
    if (cedula.length == 10) {

      let thirdDigit = parseInt(cedula.substring(2, 3));
      if (thirdDigit < 6) {
        let coefValCedual = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verifier = parseInt(cedula.substring(9, 10));
        let sum: number = 0;
        let digit: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digit = parseInt(cedula.substring(i, i + 1)) * coefValCedual[i];
          sum += ((parseInt((digit % 10) + '') + (parseInt((digit / 10) + ''))));
          console.log(sum + " suma " + coefValCedual[i]);


        }
        sum = Math.round(sum);
        if ((Math.round(sum % 10) == 0) && (Math.round(sum % 10) == verifier)) {
          rightCedula = true;
        } else if ((10 - (Math.round(sum % 10))) == verifier) {
          rightCedula = true;
        } else {
          rightCedula = false;
        }
      } else {
        rightCedula = false;
      }

    } else {
      rightCedula = false;
    }
    this.cedulaValidator = rightCedula;
  }

}
