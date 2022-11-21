import { Component, OnInit } from '@angular/core';
import { Ofertaslaboralesestudiante } from './ofertaslaboralesestudiante'; 
import { OfertaslaboralesestudianteService } from './ofertaslaboralesestudiante.service';
import {Postulacion} from '../detalleloflaboralesestudiante/postulacion'

@Component({
  selector: 'app-ofertaslaboralesestudiante',
  templateUrl: './ofertaslaboralesestudiante.component.html',
  styleUrls: ['./ofertaslaboralesestudiante.component.css']
})
export class OfertaslaboralesestudianteComponent implements OnInit {

ofertaslaboralesestudiante: Ofertaslaboralesestudiante []=[];

public postulacion: Postulacion = new Postulacion();
  constructor(private ofertaslaboralesestudianteService: OfertaslaboralesestudianteService) { }

  ngOnInit(): void {
    this.ofertaslaboralesestudianteService.getAllOfertas().subscribe(
      ofertaslaboralesestudiante => this.ofertaslaboralesestudiante = ofertaslaboralesestudiante

    );
  }




  displayStyle1 = "none";

  OpenPopupol() {
    this.displayStyle1 = "block";
  }
  closePopuppl() {
    this.displayStyle1 = "none";
  }
}
