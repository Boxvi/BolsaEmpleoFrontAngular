import { Component, OnInit } from '@angular/core';
import {OfertasaplicadasestudianteService} from './ofertasaplicadasestudiante.service';

@Component({
  selector: 'app-ofertasaplicadasestudiante',
  templateUrl: './ofertasaplicadasestudiante.component.html',
  styleUrls: ['./ofertasaplicadasestudiante.component.css']
})
export class OfertasaplicadasestudianteComponent implements OnInit {
  public ofertasaplicadasestudiante: any= [];
 
  constructor(private OfertasaplicadasestudianteService :OfertasaplicadasestudianteService) { }



  ngOnInit(): void {
    this.cargarData();
    
  }

  public cargarData(){

    

    this.OfertasaplicadasestudianteService.get('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/postulaciones/by_est/019993845')
   .subscribe(
    data => {
     this.ofertasaplicadasestudiante = data;
    }
   )
  }
 

}
