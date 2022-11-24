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
  public areastrabajo: any= [];
  expe:experiencia[]=[];
  public experiencia:experiencia = new experiencia();

  constructor(private experienciaService:experienciaService,   private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.experienciaService.getProyectos().subscribe(
      expe => this.expe=expe
    );
    this. getexperiencia();
    this.getNiveles()




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

    public getNiveles(){

      this.experienciaService.get("http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/areasTrabajo").subscribe(

        areastrabajo => {
          this.areastrabajo = areastrabajo;
        }
      )
    }

  }
