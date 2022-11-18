import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {

  empresa: Empresa[] =[

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
