import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ESTADO_CIVIL_OPCIONES } from 'src/app/data/constants/ui/estado-civil-select.const';
import { ICiudad } from 'src/app/data/interfaces/models/iciudad';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { CiudadService } from 'src/app/data/services/api/ciudad.service';
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
  public estudiante: IEstudiante | any = {
    nombres: '',
    apellidos: ''
  };

  constructor(private route: ActivatedRoute, private ciudadService: CiudadService,
    private estudianteService: EstudianteService) {
    this.estudiante_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ciudadService.getAll().subscribe(d => {
      this.ciudades = d;
    })
    if (this.estudiante_id) {
      this.estudianteService.getEstudianteById(this.estudiante_id).subscribe(d => {
        this.estudiante = d;
      })
    }
  }

}
