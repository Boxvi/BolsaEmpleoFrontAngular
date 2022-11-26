import { Component, OnInit } from '@angular/core';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { EmpresaService } from '../../services/empresa.service';
import { OfertasLaboralesService } from '../../services/ofertas/ofertas-laborales.service';

@Component({
  selector: 'app-listar-ofertas',
  templateUrl: './listar-ofertas.component.html',
  styleUrls: ['./listar-ofertas.component.css']
})
export class ListarOfertasComponent implements OnInit {

public ofertas: IOferta []=[];


  constructor(
private empresaService: EmpresaService,
private ofertasLaboralesService:OfertasLaboralesService

  ) { }

  ngOnInit(): void {
  }

}
