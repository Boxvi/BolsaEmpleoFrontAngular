import { Component, OnInit } from '@angular/core';
import { PerfilEmpresa } from './perfilEmpresa';

@Component({
  selector: 'app-perfilEmpresa',
  templateUrl: './perfilEmpresa.component.html'
})
export class PerfilEmpresaComponent implements OnInit {

  perfil: PerfilEmpresa[] =[

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
