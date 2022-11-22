import { Component, OnInit } from '@angular/core';
import { Capacitacionesestudiante } from './capacitacionesestudiante';
import {CapacitacionesestudianteService} from './capacitacionesestudiante.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-capacitacionesestudiante',
  templateUrl: './capacitacionesestudiante.component.html',
  styleUrls: ['./capacitacionesestudiante.component.css']
})
export class CapacitacionesestudianteComponent implements OnInit {
  dates: any=[];
  public capacitacionesestudiante: any= [];

  public niveles: any= [];
  
  capacitacion: Capacitacionesestudiante[]=[];
  public Capacitacionesestudiante:Capacitacionesestudiante = new Capacitacionesestudiante()
  constructor(private CapacitacionesestudianteService:CapacitacionesestudianteService, private router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
this.getNiveles()
    this.cargarDatos();
  }


public cargarDatos(){

}
public create(): void {
  this.CapacitacionesestudianteService.create(this.Capacitacionesestudiante).subscribe(
    Capacitacionesestudiante => {this.router.navigate(['./capacitacionesestudiante'])
    Swal.fire('Datos guardado', `guardo con éxito`,'success')
    console.log("es un click")
    console.log(this.Capacitacionesestudiante)
  }
  )
 
}

guardado(){
this.Capacitacionesestudiante.cedula ="0105995378"
this.Capacitacionesestudiante.area_estudio= this.dates.area_estudio
this.Capacitacionesestudiante.institucion= this.dates.institucion
this.Capacitacionesestudiante.nombre_capacitacion = this.dates.nombre_capacitacion
this.Capacitacionesestudiante.tipoCapacitacion =this.dates.tipoCapacitacion
this.Capacitacionesestudiante.tipoCertificado = this.dates.tipoCertificado
this.Capacitacionesestudiante.fechaInicio = this.dates.fechaInicio
this.Capacitacionesestudiante.fechaFin = this.dates.fechaFin
this.Capacitacionesestudiante.numHoras= this.dates.numHoras

console.log(this.Capacitacionesestudiante)
this.CapacitacionesestudianteService.create(this.capacitacionesestudiante)
.subscribe(data =>
 {

  console.log("datos guardados")
  console.log(data)

 })

}




/*public getNivel(){
  this.CapacitacionesestudianteService.get('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/niveles').
  subscribe(
    niveles => { this.niveles = niveles}
)
}*/
public getNiveles(){

  this.CapacitacionesestudianteService.get("http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/AreasEstudio").subscribe(

    niveles => {
      this.niveles = niveles;
    }
  )
}


}






