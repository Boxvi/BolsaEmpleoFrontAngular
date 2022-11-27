import { Component, OnInit } from '@angular/core';

import {OfertaService} from "./list-ofertas-laborales.service";
import {OfertaLaboral} from "./list-ofertas-laborales";

@Component({
  selector: 'app-list-ofertas-laborales',
  templateUrl: './list-ofertas-laborales.component.html',
  styleUrls: ['./list-ofertas-laborales.component.css']
})
export class ListOfertasLaboralesComponent implements OnInit {

  public ofertalaboral: OfertaLaboral[]= [];

  constructor(private ofertaService: OfertaService) {}

  ngOnInit(): void {

    this.gerOfertas()

  }
  private gerOfertas() {
    this.ofertaService.gerOfertas().subscribe(
      ofertas => this.ofertalaboral = ofertas
    );
  }

  /*
  cargarDatosOfertas():void {
    this.ofertaService.obtenerOfertas().then((res)=>{
      //console.log('respuesta ', res);
      res.forEach((elem: any) => {
        console.log(elem);
        this.oferta.push(elem);
      })
    }).catch((err)=>{
    });
  }*/


}
