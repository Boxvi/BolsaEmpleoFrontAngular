import { Component, OnInit } from '@angular/core';
import {PerfilEmpresa} from "./list-perfil-empresarial";
import {EmpresasService} from "./list-perfil-empresarial.service";

@Component({
  selector: 'app-list-perfil-empresarial',
  templateUrl: './list-perfil-empresarial.component.html',
  styleUrls: ['./list-perfil-empresarial.component.css']
})
export class ListPerfilEmpresarialComponent implements OnInit {

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
