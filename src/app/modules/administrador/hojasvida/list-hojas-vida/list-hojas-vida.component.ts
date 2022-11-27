import { Component, OnInit } from '@angular/core';
import {HojaDeVida} from "./list-hojas-vida";
import {HojaDeVidaService} from "./list-hojas-vida.service";

@Component({
  selector: 'app-list-hojas-vida',
  templateUrl: './list-hojas-vida.component.html',
  styleUrls: ['./list-hojas-vida.component.css']
})
export class ListHojasVidaComponent implements OnInit {

  hojaVidas: HojaDeVida[] = [];

  constructor( private _hojaDeVidaService: HojaDeVidaService) { }

  ngOnInit(): void {

    this.cargarHojaDeVida();
  }

  cargarHojaDeVida():void {
    this._hojaDeVidaService.obtenerHojadeVida().then((res)=>{
      //console.log('respuesta ', res);
      res.forEach((elem: any) => {
        console.log(elem.apellidos);
        this.hojaVidas.push(elem);
      })
    }).catch((err)=>{

    });
  }
}
