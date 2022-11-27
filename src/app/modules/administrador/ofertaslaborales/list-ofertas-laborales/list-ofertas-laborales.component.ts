import { Component, OnInit } from '@angular/core';

import {OfertaService} from "./list-ofertas-laborales.service";
import {OfertaLaboral} from "./list-oferta-laborales";

@Component({
  selector: 'app-list-ofertas-laborales',
  templateUrl: './list-ofertas-laborales.component.html',
  styleUrls: ['./list-ofertas-laborales.component.css']
})
export class ListOfertasLaboralesComponent implements OnInit {

  oferta: OfertaLaboral[]= [];

  constructor(private ofertaService: OfertaService) {}

  ngOnInit(): void {

    this.cargarDatosOfertas()

  }

  cargarDatosOfertas():void {
    this.ofertaService.obtenerOfertas().then((res)=>{
      //console.log('respuesta ', res);
      res.forEach((elem: any) => {
        console.log(elem);
        this.oferta.push(elem);
      })
    }).catch((err)=>{
    });
  }

}
