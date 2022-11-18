import { HDV } from './HojaDeVida.json';
import { Component, OnInit } from '@angular/core';
import { HojaDeVida } from './HojaDeVida';
import { HojaDeVidaService } from './HojaDeVida.service';

@Component({
  selector: 'app-HojaDeVida',
  templateUrl: './HojaDeVida.component.html'
})
export class HojaDeVidaComponent implements OnInit {

  hojaVidas: HojaDeVida[] = [];

  constructor( private hojaDeVidaService: HojaDeVidaService) { }

  ngOnInit(): void {

    this.hojaDeVidaService.getHojaDeVida().subscribe(

      hojaVidas => this.hojaVidas = hojaVidas
    )
  }

}
