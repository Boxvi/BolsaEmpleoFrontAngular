import { Component, OnInit } from '@angular/core';
import { experiencia } from './experiencia';
import { experienciaService } from './experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public experienciat:experiencia = new experiencia();
  constructor(private experieciaService:experienciaService, private router:Router, private activatedRouter:ActivatedRoute) { }
  public areastrabajo: any= [];
  ngOnInit(): void {
    this.getNiveles();
  }


  public create(): void {

    this.experieciaService.addNewCapacitacion(this.experienciat)
    .subscribe(
    data =>{
      this.router.navigate(['./experienciaestudiante'])
      this.experienciat = data
      this.experienciat.area_trabajo= this.areastrabajo;
    console.log("datos guardados")
    console.log(data)
    }

    )
    console.log(this.experienciat)
  }

  /*update():void{
    this.CapacitacionesestudianteService.update(this.capacitacionest).subscribe(

      response => this.router.navigate(['./capacitacionesestudiante'])
    );
  }*/



  public getNiveles(){

    this.experieciaService.get("http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/areasTrabajo").subscribe(

      areastrabajo => {
        this.areastrabajo = areastrabajo;
      }
    )
  }

}
