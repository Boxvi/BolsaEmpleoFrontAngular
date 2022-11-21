import { Component, OnInit } from '@angular/core';
import { datoscontacto } from './datoscontacto';
import { datoscontactoService } from './datoscontacto.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-datoscontacto',
  templateUrl: './datoscontacto.component.html',
  styleUrls: ['./datoscontacto.component.css']
})
export class DatoscontactoComponent implements OnInit {

  public datoscontacto : datoscontacto = new datoscontacto();

  constructor(private datoscontactoservice: datoscontactoService, private router:Router,private activateRouter:ActivatedRoute) { }


  ngOnInit(): void {
    this.getdatoscontacto()

  }

  getdatoscontacto():void{

    this.activateRouter.params.subscribe(  params => {
  
      let id = params['id'];
      if (id) {
        this.datoscontactoservice.getdatoscontacto(id).subscribe((datoscontacto)=> this.datoscontacto = datoscontacto)
      }
    })
  }

}
