import { Component, OnInit } from '@angular/core';
import { consultarcurriculums } from './consultarcurriculums';
import { consultarcurriculumsService } from './consultarcurriculums.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consultarcurriculums',
  templateUrl: './consultarcurriculums.component.html',
  styleUrls: ['./consultarcurriculums.component.css']
})
export class ConsultarcurriculumsComponent implements OnInit {

  public consultarcurriculums : consultarcurriculums = new consultarcurriculums();

  constructor(private consultarcurriculumsService:consultarcurriculumsService, private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getconsultarcurriculums()
  }

  getconsultarcurriculums():void{

    this.activateRouter.params.subscribe(  params => {
  
      let id = params['id'];
      if (id) {
        this. consultarcurriculumsService.getconsultarcurriculums(id).subscribe((consultarcurriculums)=> this.consultarcurriculums = consultarcurriculums)
      }
    })
  }

}
