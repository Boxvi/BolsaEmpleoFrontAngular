import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import {EmpresasService} from "../../../serviceEmpresa/empresas.service";
import {PerfilEmpresa} from "../PerfilEmpresa/perfilEmpresa";

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {

  empresa: Empresa[] =[

  ];
  perfil: PerfilEmpresa[] =[

  ];

  constructor(private _empresaService: EmpresasService) { }

  ngOnInit(): void {
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
