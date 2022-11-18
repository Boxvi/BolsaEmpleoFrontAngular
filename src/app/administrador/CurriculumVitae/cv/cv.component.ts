import { CV } from './cv.json';
import { Component, OnInit } from '@angular/core';
import { Cv } from './cv';
import { cvService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html'
})
export class cvComponent implements OnInit {

  cvit: Cv[] = [];

  constructor( private cv: cvService) { }

  ngOnInit(): void {

    this.cv.getCv().subscribe(

      cvit => this.cvit = cvit
    )
  }

}
