import { Component, OnInit } from '@angular/core';
import { editarperfilocupacionalService } from './editarperfilocupacional.service';
import { Router, ActivatedRoute } from '@angular/router';
import { editarperfilocupacional } from './ediatarperfilocupacional';
@Component({
  selector: 'app-editarperfilocupacional',
  templateUrl: './editarperfilocupacional.component.html',
  styleUrls: ['./editarperfilocupacional.component.css']
})
export class EditarperfilocupacionalComponent implements OnInit {
  editarperfilocupacional:editarperfilocupacional=new editarperfilocupacional;
  editarperfilocupacio: editarperfilocupacional[]=[];
   constructor(private editarperfilocupacionalService:editarperfilocupacionalService,   private router:Router,private activateRouter:ActivatedRoute) { }


  ngOnInit(): void {
    this.getperfilocupacional()

  }
  getperfilocupacional(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.editarperfilocupacionalService.getperfilocupacional(id).subscribe((editarperfilocupacional)=>this.editarperfilocupacional =editarperfilocupacional)
      }
    })
  }
  public Editar():void{
    this.editarperfilocupacional.cedula="019993845"
    this.editarperfilocupacionalService.editar(this.editarperfilocupacional).subscribe(
      response=> this.router.navigate(['/editarperfilocupacionalestudiante/:id'])
    )
  }






}
