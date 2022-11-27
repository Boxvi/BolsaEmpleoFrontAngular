import { Component, OnInit } from '@angular/core';
import {OfertasClase} from "./form-oferta-laboral";
import {OfertaService} from "./form.-ofertas-laborales.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-ofertas-laborales',
  templateUrl: './form-ofertas-laborales.component.html',
  styleUrls: ['./form-ofertas-laborales.component.css']
})
export class FormOfertasLaboralesComponent implements OnInit {

  public ofertas: OfertasClase = new OfertasClase();

  constructor(private datosOferta: OfertaService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.cargaroferta()
  }

  cargaroferta(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if(id){
          this.datosOferta.getOferta(id).subscribe(
            es => this.ofertas = es
          );
        }
      }
    );
  }

}
