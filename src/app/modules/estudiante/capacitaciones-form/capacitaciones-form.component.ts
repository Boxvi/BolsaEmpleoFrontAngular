import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CapacitacionesService } from '../services/capacitaciones/capacitaciones.service'; 
import {Capacitacion} from 'src/app/data/interfaces/models/capacitacion'
@Component({
  selector: 'app-capacitaciones-form',
  templateUrl: './capacitaciones-form.component.html',
  styleUrls: ['./capacitaciones-form.component.css']
})
export class CapacitacionesFormComponent implements OnInit {
  areaEstudiodatos:any;
  public niveles: any= [];
  public capacitacionest: Capacitacion | any = {
  };
  

constructor(private route: ActivatedRoute, private capacitacionesService: CapacitacionesService, private activatedRouter:ActivatedRoute ) {}




  ngOnInit(): void {
    this.getAreasdeestudio();
  }




//traer areas de estudio de la base de datos
  public getAreasdeestudio(){

    this.capacitacionesService.get("http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/AreasEstudio").subscribe(
  
      niveles => {
        this.niveles = niveles;
      }
    )
  }



  public create(): void {

    this.capacitacionesService.save(this.capacitacionest)
    .subscribe(   
    data =>{
      this.capacitacionest = data
      this.capacitacionest.area_estudio= this.areaEstudiodatos;
    console.log("datos guardados")
    console.log(data)
    }
    
    )
    console.log(this.capacitacionest)
  }





}
