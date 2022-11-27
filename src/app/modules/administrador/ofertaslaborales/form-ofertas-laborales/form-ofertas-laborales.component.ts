import { Component, OnInit } from '@angular/core';
import {Ofertas} from "./form-ofertas-laborales";
import {OfertaService} from "./form-ofertas-laborales.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-ofertas-laborales',
  templateUrl: './form-ofertas-laborales.component.html',
  styleUrls: ['./form-ofertas-laborales.component.css']
})
export class FormOfertasLaboralesComponent implements OnInit {

  public ofertas: Ofertas = new Ofertas();

  constructor(private datosOferta: OfertaService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getOferta()
  }

  private getOferta() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.datosOferta.getOferta(id).subscribe(
            of => this.ofertas = of
          );
        }
      }
    );
  }

  /*
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
    );*/


}
