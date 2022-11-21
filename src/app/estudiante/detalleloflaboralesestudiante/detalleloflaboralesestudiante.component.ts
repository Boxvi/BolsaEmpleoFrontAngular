import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{Detalleloflaboralesestudiante}from './detalleloflaboralesestudiante'
import {detalleloflaboralesestudianteService} from './detalleloflaboralesestudiante.service'
import { Postulacion } from './postulacion';


@Component({
  selector: 'app-detalleloflaboralesestudiante',
  templateUrl: './detalleloflaboralesestudiante.component.html',
  styleUrls: ['./detalleloflaboralesestudiante.component.css']
})
export class DetalleloflaboralesestudianteComponent implements OnInit {


  //public detalleloflaboralesestudiante : Detalleloflaboralesestudiante = new Detalleloflaboralesestudiante();
  public detalleloflaboralesestudiante: any =[] ;
  public postulacion: Postulacion = new Postulacion();
  constructor(private DetalleloflaboralesestudianteService :detalleloflaboralesestudianteService, private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getIDoferta()
  }

  
getIDoferta():void{

  this.activateRouter.params.subscribe(  params => {

    let id = params['id'];
    if (id) {
      this.DetalleloflaboralesestudianteService.getIDoferta(id).subscribe((detalleloflaboralesestudiante)=> this.detalleloflaboralesestudiante = detalleloflaboralesestudiante)
    }
  })
}





}
