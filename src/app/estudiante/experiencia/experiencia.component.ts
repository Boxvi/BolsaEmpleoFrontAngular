import { Component, OnInit } from '@angular/core';
import { experienciaService } from './experiencia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { experiencia } from './experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe:experiencia[]=[];
  public experiencia:experiencia = new experiencia();

  constructor(private experienciaService:experienciaService,   private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.experienciaService.getProyectos().subscribe(
      expe => this.expe=expe
    );
    this. getexperiencia()




  }

  getexperiencia():void{
    this.activateRouter.params.subscribe(params=>{
    let id = params['id']
      if(id){
   this.experienciaService.getexperiencia(id).subscribe((experiencia)=>this.experiencia =experiencia)
      }
    })
  }

  public create():void{
    this.experiencia.cedula="019993847"
    this.experienciaService.create(this.experiencia).subscribe(
      response=> this.router.navigate(['/experienciaestudiante/:id'])
    )
    }



  }
