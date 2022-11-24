import { Component, OnInit } from '@angular/core';
import { editarexperienciaService } from './editarexperiencia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { editarexperiencia } from './editarexperiencia';
@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit {

  editarexperiencia:editarexperiencia=new editarexperiencia;
  editarexpe: editarexperiencia[]=[];

  constructor(private editarexperienciaService:editarexperienciaService,   private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getexperiencia()
  }
  getexperiencia(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.editarexperienciaService.getexperiencia(id).subscribe((editarexperiencia)=>this.editarexperiencia =editarexperiencia)
      }
    })
  }
  public Editar():void{
    this.editarexperiencia.cedula="019993845"
    this.editarexperienciaService.editar(this.editarexperiencia).subscribe(
      response=> this.router.navigate(['/editarexperienciaestudiante/:id'])
    )
  }



}
