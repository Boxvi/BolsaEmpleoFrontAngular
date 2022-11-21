import { Component, OnInit } from '@angular/core';
import {OfertasaplicadasestudianteService} from './ofertasaplicadasestudiante.service';
import { Router, ActivatedRoute } from '@angular/router';
import{Ofertasaplicadasestudiante, Estudiante} from './ofertasaplicadasestudiante'

@Component({
  selector: 'app-ofertasaplicadasestudiante',
  templateUrl: './ofertasaplicadasestudiante.component.html',
  styleUrls: ['./ofertasaplicadasestudiante.component.css']
})



export class OfertasaplicadasestudianteComponent implements OnInit {
  public ofertasaplicadasestudiante: any= [];
 
  constructor(private OfertasaplicadasestudianteService :OfertasaplicadasestudianteService,private router:Router,private activateRouter:ActivatedRoute) { }



  ngOnInit(): void {
   this.cargarData('019993845'); 
   //this.getIDoferta();
   //this.getAllbyUser();
   //this.getallByCedul();
  }


  public getAllbyUser(){

    this.OfertasaplicadasestudianteService.getAllbyUser()
    .subscribe((resp )=>  {
      this.ofertasaplicadasestudiante = resp;   
      console.log(resp);
    })
  }

  /*public getallByCedul(): void{
  
   this.activateRouter.params.subscribe( params => {

    let cedula= params ['cedula'];

    if( cedula){
      this.OfertasaplicadasestudianteService.getbyCedula(cedula)
      .subscribe((aplicadas)=>this.ofertasaplicadasestudiante= aplicadas);
    }

   })



  }*/
  public cargarData(cedula: string): void {
    this.OfertasaplicadasestudianteService.get('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/postulaciones/by_est/'+cedula)
   .subscribe(
    data => {
     this.ofertasaplicadasestudiante = data;
     console.log(this.ofertasaplicadasestudiante);
     
    }
   )
  }
 
  getIDoferta(estudiante:Ofertasaplicadasestudiante):void{
  estudiante.estudiante?.cedula
  }







  
}
