import { Component, OnInit } from '@angular/core';
import { perfilocupacional } from './perfilocupacional';
import { perfilocupacionalService } from './perfilocupacional.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfilocupacional',
  templateUrl: './perfilocupacional.component.html',
  styleUrls: ['./perfilocupacional.component.css']
})
export class PerfilocupacionalComponent implements OnInit {




  perfilocupacional:perfilocupacional=new perfilocupacional;
  perfilocupacio: perfilocupacional[]=[];  constructor(private perfilocupacionalService:perfilocupacionalService,   private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getperfilocupacional()

  }
  getperfilocupacional(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.perfilocupacionalService.getperfilocupacional(id).subscribe((perfilocupacional)=>this.perfilocupacional =perfilocupacional)
      }
    })
  }


  public create():void{
    this.perfilocupacional.cedula="019993846"
    this.perfilocupacionalService.create(this.perfilocupacional).subscribe(
      response=> this.router.navigate(['/perfilocupacionalestudiante/:id'])
    )

  }




}
