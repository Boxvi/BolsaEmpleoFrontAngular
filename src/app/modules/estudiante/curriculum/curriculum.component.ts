import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private estudianteService:EstudianteService) { }

  ngOnInit(): void {
  }

}
