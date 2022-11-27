import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { EmpresaService } from '../../services/empresa.service';
import { OfertasLaboralesService } from '../../services/ofertas/ofertas-laborales.service';

@Component({
  selector: 'app-listar-ofertas',
  templateUrl: './listar-ofertas.component.html',
  styleUrls: ['./listar-ofertas.component.css']
})
export class ListarOfertasComponent implements OnInit {

public myofertas: IOferta []=[];
public empresa: IEmpresa []=[];
public empresa_id: number = 0;

  constructor(
private empresaService: EmpresaService,
private ofertasLaboralesService:OfertasLaboralesService,
private router:Router,private route: ActivatedRoute,
) {

this.empresa_id=this.route.snapshot.params['id']; 

}

  ngOnInit(): void {
    this.ofertasLaboralesService.getpublicadasByEmpresaid(this.empresa_id)
    .subscribe(r=>{
      this.myofertas=r;
    })
    this.getDataEmpresa();


    if(this.empresa_id){
this.empresaService.getSummaryByEmpresaId(this.empresa_id)
.subscribe(
  r=>{
    this.empresaService.setId(r.id)
    this.empresaService.setName(r.nombre);
  }
)}
}

  public getDataEmpresa(){

    this.empresaService.getSummaryByEmpresaId(this.empresa_id)
    .subscribe(r=>{
      this.empresa=r;
      
    })

  }





}

