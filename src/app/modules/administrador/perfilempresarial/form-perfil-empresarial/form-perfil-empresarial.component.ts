import { Component, OnInit } from '@angular/core';
import {Empresa} from "./form-perfil-empresarial";
import {PerfilEmpresa} from "../list-perfil-empresarial/list-perfil-empresarial";
import {DatosEmpresaService} from "./forms-perfil-empresarial.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-perfil-empresarial',
  templateUrl: './form-perfil-empresarial.component.html',
  styleUrls: ['./form-perfil-empresarial.component.css']
})
export class FormPerfilEmpresarialComponent implements OnInit {
  public empresas: Empresa = new Empresa();

  empresa: Empresa[] =[

  ];

  perfil: PerfilEmpresa[] =[

  ];

  constructor(private _empresaServiceDatos: DatosEmpresaService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.cargarDatosRepre()
    this.cargarDatosEmpresas()

    this.cargarDatosEmpresaByBoris()
    this.cargarDatosRepresentante()
  }


  cargarDatosEmpresas():void {
    this._empresaServiceDatos.obtenerPerfilesEmpresa().then((res)=>{
      //console.log('respuesta ', res);
      res.forEach((elem: any) => {
        console.log(elem);
        this.perfil.push(elem);
      })
    }).catch((err)=>{
    });
  }
  cargarDatosRepre():void {
    this._empresaServiceDatos.obtenerPerfilesRespre().then((res)=>{
      //console.log('respuesta ', res);
      res.forEach((datos: any) => {
        console.log(datos);
        this.empresa.push(datos);
      })
    }).catch((err)=>{
    });

  }


  cargarDatosEmpresaByBoris(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];

        if(id){
          this._empresaServiceDatos.getEmpresas(id).subscribe(

            es => this.empresas = es

          );
        }
      }

    );
  }

  cargarDatosRepresentante(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];

        if(id){
          this._empresaServiceDatos.getRepres(id).subscribe(

            es => this.empresas = es

          );
        }
      }
    );
  }


}
