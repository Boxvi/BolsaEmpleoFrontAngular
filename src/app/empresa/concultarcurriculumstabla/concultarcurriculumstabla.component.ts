import { Component, OnInit } from '@angular/core';
import { consultarcurriculumstabla } from './consultarcurriculumstabla';
import { consultarcurriculumstablaService } from './consultarcurriculumstabla.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concultarcurriculumstabla',
  templateUrl: './concultarcurriculumstabla.component.html',
  styleUrls: ['./concultarcurriculumstabla.component.css']
})
export class ConcultarcurriculumstablaComponent implements OnInit {

  public consultarcurriculumstabla : consultarcurriculumstabla = new consultarcurriculumstabla();

  constructor(private consultarcurriculumstablaService:consultarcurriculumstablaService, private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getconsultarcurriculumstabla()
  }

  getconsultarcurriculumstabla():void{

    this.activateRouter.params.subscribe(  params => {
  
      let id = params['id'];
      if (id) {
        this. consultarcurriculumstablaService.getconsultarcurriculumstabla(id).subscribe((consultarcurriculumstabla)=> this.consultarcurriculumstabla = consultarcurriculumstabla)
      }
    })
  }

}
