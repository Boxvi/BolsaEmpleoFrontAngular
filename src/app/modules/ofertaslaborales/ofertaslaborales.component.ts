import { Component, OnInit } from '@angular/core';
import {Ofertaslaborales} from 'src/app/data/interfaces/models/ofertaslaborales';
import { OfertaslaboralesService } from './ofertaslaborales.service';

@Component({
  selector: 'app-ofertaslaborales',
  templateUrl: './ofertaslaborales.component.html',
  styleUrls: ['./ofertaslaborales.component.css']
})
export class OfertaslaboralesComponent implements OnInit {
  ofertaslaboralesestudiante: Ofertaslaborales []=[];
  constructor(public ofertaslaboralesservice: OfertaslaboralesService) { }

  ngOnInit(): void {
    this.getAll();
  }


public getAll() :void{
this.ofertaslaboralesservice.getAllOfertas()
.subscribe(
  ofertas => this.ofertaslaboralesservice = ofertas
);

}





}
