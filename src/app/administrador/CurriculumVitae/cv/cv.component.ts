import { CV } from './cv.json';
import { Component, OnInit } from '@angular/core';
import { Cv } from './cv';
import { cvService } from './cv.service';
import {HojaDeVidaService} from "../../../serviceEstudiantes/hoja-de-vida.service";
import {HojaDeVida} from "../HojaDeVida/HojaDeVida";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html'
})
export class cvComponent implements OnInit {

  cvit: Cv[] = [];
  hojaVidas: HojaDeVida[] = [];

  constructor( private cv: cvService, private _hojaDeVidaService: HojaDeVidaService) { }



  ngOnInit(): void {

    this.cv.getCv().subscribe(

      cvit => this.cvit = cvit
    )
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
