import { Component, OnInit } from '@angular/core';
import { datoscontactoService } from './datoscontacto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { datosempresa } from './datosempresa';


@Component({
  selector: 'app-datosempresa',
  templateUrl: './datosempresa.component.html',
  styleUrls: ['./datosempresa.component.css']
})
export class DatosempresaComponent implements OnInit {
  public datosempresa : datosempresa = new datosempresa();

  constructor(private datosempresaservice: datoscontactoService, private router:Router,private activateRouter:ActivatedRoute) { }


  ngOnInit(): void {
    this.getdatosempresa()
  }

  getdatosempresa():void{

    this.activateRouter.params.subscribe(  params => {
  
      let id = params['id'];
      if (id) {
        this.datosempresaservice.getdatosempresa(id).subscribe((datosempresa)=> this.datosempresa = datosempresa)
      }
    })
  }
}
