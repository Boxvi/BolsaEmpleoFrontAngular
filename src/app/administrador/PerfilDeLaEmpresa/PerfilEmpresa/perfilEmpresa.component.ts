import { Component, OnInit } from '@angular/core';
import { PerfilEmpresa } from './perfilEmpresa';
import {HojaDeVidaService} from "../../../serviceEstudiantes/hoja-de-vida.service";
import {EmpresasService} from "../../../serviceEmpresa/empresas.service";

@Component({
  selector: 'app-perfilEmpresa',
  templateUrl: './perfilEmpresa.component.html'
})
export class PerfilEmpresaComponent implements OnInit {

  perfil: PerfilEmpresa[] =[

  ];

  constructor(private _empresaService: EmpresasService) { }

  ngOnInit(): void {
    this.cargarEmpresas();
  }

  cargarEmpresas():void {
    this._empresaService.obtenerPerfilEmpresa().then((res)=>{
      //console.log('respuesta ', res);
      res.forEach((elem: any) => {
        console.log(elem);
        this.perfil.push(elem);
      })
    }).catch((err)=>{

    });
  }

}
