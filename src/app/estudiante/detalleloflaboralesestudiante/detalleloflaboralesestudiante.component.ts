import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import{Detalleloflaboralesestudiante}from './detalleloflaboralesestudiante'
import {detalleloflaboralesestudianteService} from './detalleloflaboralesestudiante.service'
import { Postulacion } from './postulacion';


@Component({
  selector: 'app-detalleloflaboralesestudiante',
  templateUrl: './detalleloflaboralesestudiante.component.html',
  styleUrls: ['./detalleloflaboralesestudiante.component.css']
})
export class DetalleloflaboralesestudianteComponent implements OnInit {


  //public detalleloflaboralesestudiantes : Detalleloflaboralesestudiante = new Detalleloflaboralesestudiante();
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

public create():void{

  this.DetalleloflaboralesestudianteService.savePostulacion(this.postulacion)
  .subscribe( p => {
    this.router.navigate(['/detalleloflaboralesestudiante/'])
    this.postulacion.fecha?.toISOString()
   // this.postulacion.estado = "En proceso ";
    console.log(this.postulacion.fecha)
   
  })
  Swal.fire('Postulacion realizada con exito');

} 



}
