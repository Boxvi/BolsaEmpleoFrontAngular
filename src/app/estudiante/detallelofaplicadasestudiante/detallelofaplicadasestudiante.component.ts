import { Component, OnInit } from '@angular/core';
import{Detallelofaplicadasestudiante} from './detallelofaplicadasestudiante'
import { Router, ActivatedRoute } from '@angular/router';
import {Detallelofaplicadasestudianteservice} from './detallelofaplicadasestudiante.service'
@Component({
  selector: 'app-detallelofaplicadasestudiante',
  templateUrl: './detallelofaplicadasestudiante.component.html',
  styleUrls: ['./detallelofaplicadasestudiante.component.css']
})
export class DetallelofaplicadasestudianteComponent implements OnInit {

  constructor(private detallelofaplicadasestudianteservice: Detallelofaplicadasestudianteservice, private router:Router,private activateRouter:ActivatedRoute) { }
  public detallelofaplicadasestudiante: any =[] ;
  ngOnInit(): void {
    this.getIDoferta();
  }




  
  getIDoferta():void{

    this.activateRouter.params.subscribe(  params => {
  
      let id = params['id'];
      if (id) {
        this.detallelofaplicadasestudianteservice.getbyId(id)
        .subscribe((data) => this.detallelofaplicadasestudiante= data)
      }
    })
  }






}
