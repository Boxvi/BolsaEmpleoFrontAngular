import { Component, OnInit } from '@angular/core';
import { referenciaslaborales } from './referenciaslaborales';
import { referencialaboralService } from './referenciaslaborales.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referenciaslaborales',
  templateUrl: './referenciaslaborales.component.html',
  styleUrls: ['./referenciaslaborales.component.css']
})
export class ReferenciaslaboralesComponent implements OnInit {
  referenciaslabo:referenciaslaborales[]=[];
  public referenciaslaborales:referenciaslaborales = new referenciaslaborales();

  constructor(private referencialaboralService:referencialaboralService,   private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getreferenciaslaborales()
  }
  getreferenciaslaborales():void{
    this.activateRouter.params.subscribe(params=>{
    let id = params['id']
      if(id){
   this.referencialaboralService.getreferenciaslaborales(id).subscribe((referenciaslaborales)=>this.referenciaslaborales =referenciaslaborales)
      }
    })
  }

  public create():void{
    this.referenciaslaborales.cedula="019993846"
    this.referencialaboralService.create(this.referenciaslaborales).subscribe(
      response=> this.router.navigate(['/referenciaslaboralesestudiante/:id'])
    )

  }

}


