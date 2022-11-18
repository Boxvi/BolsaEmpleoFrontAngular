import { Component, OnInit } from '@angular/core';
import { InformacionlaboralService } from './informacionlaboral.service';
import { informacionlaboral} from './informacionlaboral';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacionlaboralestudiante',
  templateUrl: './informacionlaboralestudiante.component.html',
  styleUrls: ['./informacionlaboralestudiante.component.css']
})
export class InformacionlaboralestudianteComponent implements OnInit {

  informacionlabo: informacionlaboral[]=[];
  public informacionlaboral:informacionlaboral = new informacionlaboral();

  constructor(private InformacionlaboralService:InformacionlaboralService,private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this. getinformacionlaboral()
  }




  getinformacionlaboral(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.InformacionlaboralService.getinformacionlaboral(id).subscribe((informacionlaboral)=>this.informacionlaboral =informacionlaboral)
      }
    })

  }

}


