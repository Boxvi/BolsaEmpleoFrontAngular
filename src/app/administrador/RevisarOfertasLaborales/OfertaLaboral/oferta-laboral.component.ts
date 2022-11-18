import { Component, OnInit } from '@angular/core';
import { OfertaLaboral } from './oferta-laboral';
import { OFERTA } from './oferta-laboral.json';
import { OfertaLaboralService } from './oferta-laboral.service';

@Component({
  selector: 'app-oferta-laboral',
  templateUrl: './oferta-laboral.component.html'
})
export class OfertaLaboralComponent implements OnInit {

  oferta: OfertaLaboral[]= [];

  constructor(private ofertaService: OfertaLaboralService) {}

  ngOnInit(): void {

    this.ofertaService.getOfertas().subscribe(

      oferta => this.oferta = oferta
    )
  }

}
