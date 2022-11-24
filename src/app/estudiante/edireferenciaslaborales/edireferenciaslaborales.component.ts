import { Component, OnInit } from '@angular/core';
import { edireferenciaslaboralesService } from './edireferenciaslaborales.service';
import { Router, ActivatedRoute } from '@angular/router';
import { edireferenciaslaborales } from './edireferenciaslaborales';
   @Component({
  selector: 'app-edireferenciaslaborales',
  templateUrl: './edireferenciaslaborales.component.html',
  styleUrls: ['./edireferenciaslaborales.component.css']
})
export class EdireferenciaslaboralesComponent implements OnInit {

  edireferenciaslaborales:edireferenciaslaborales=new edireferenciaslaborales;
  constructor(private edireferenciaslaboralesService:edireferenciaslaboralesService,   private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.getedireferenciaslaborales()
  }
  getedireferenciaslaborales(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.edireferenciaslaboralesService.getreferenciaslaborales(id).subscribe((edireferenciaslaborales)=>this.edireferenciaslaborales=edireferenciaslaborales)
      }
    })
  }

  public Editar():void{
    this.edireferenciaslaborales.cedula="019993846"
    this.edireferenciaslaboralesService.editar(this.edireferenciaslaborales).subscribe(
      response=> this.router.navigate(['/editarexperienciaestudiante/:id'])
    )
  }



}
