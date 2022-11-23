import { Component, OnInit } from '@angular/core';
import { STUDENT_MENU_OPTIONS } from 'src/app/data/constants/ui/student-menu-options';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { CardOption } from 'src/app/data/interfaces/ui/card-option';
import { AuthService } from '../../auth/services/auth.service';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public studentOptions: CardOption[] = STUDENT_MENU_OPTIONS;
  public perfilEstudiante: IEstudiante | any;
  public usuario_id = 0;

  constructor(private authService: AuthService,
    private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.usuario_id = this.authService.getUser().usuario_id;

    this.estudianteService.getEstudianteByUserId(this.usuario_id).subscribe(d => {
      this.perfilEstudiante = d;
    })

  }

}
