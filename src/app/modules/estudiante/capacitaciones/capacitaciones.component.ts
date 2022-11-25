import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CapacitacionesService } from '../services/capacitaciones/capacitaciones.service'; 
import {Capacitacion} from 'src/app/data/interfaces/models/capacitacion'

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  public capacitacion: Capacitacion [] = [];
  public estudiante_id: number=0;


  constructor(
    private capacitacionesService: CapacitacionesService,
    private route: ActivatedRoute ) {
    this.estudiante_id = this.route.snapshot.params['id'];   
     }

  ngOnInit(): void {
   this.getCapacitacionByEstudiante();
}


public getCapacitacionByEstudiante(): void {
  if(this.estudiante_id){
    this.capacitacionesService.getCapacitacionByEstudianteId(this.estudiante_id)
    .subscribe( r=> {
      this.capacitacion =r;
    })
    console.log(this.capacitacion);
    }
}










}
