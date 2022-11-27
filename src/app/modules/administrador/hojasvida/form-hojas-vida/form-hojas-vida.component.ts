import { Component, OnInit } from '@angular/core';
import {Curriculum} from "./form-hojas-vida";
import {CurriculumEstudianteService} from "./form-hojas-vida.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-hojas-vida',
  templateUrl: './form-hojas-vida.component.html',
  styleUrls: ['./form-hojas-vida.component.css']
})
export class FormHojasVidaComponent implements OnInit {

  public cvs: Curriculum = new Curriculum();



  cv: Curriculum[] =[

  ];
  constructor( private _curriculums: CurriculumEstudianteService, private router: Router, private activatedRoute: ActivatedRoute,) { }



  ngOnInit(): void {
    this.cargarHojaDeVida()
  }

  cargarHojaDeVida(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];

        if(id){
          this._curriculums.getEstudiante(id).subscribe(

            es => this.cvs = es

          );
        }
      }

    );
  }

}
