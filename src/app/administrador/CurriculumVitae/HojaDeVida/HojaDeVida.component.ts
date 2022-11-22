import { HDV } from './HojaDeVida.json';
import { Component, OnInit } from '@angular/core';
import { HojaDeVida } from './HojaDeVida';
import {HojaDeVidaService} from "../../../serviceEstudiantes/hoja-de-vida.service";


@Component({
  selector: 'app-HojaDeVida',
  templateUrl: './HojaDeVida.component.html'
})
export class HojaDeVidaComponent implements OnInit {

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
