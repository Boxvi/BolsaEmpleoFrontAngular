import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertaslaboralesestudiante',
  templateUrl: './ofertaslaboralesestudiante.component.html',
  styleUrls: ['./ofertaslaboralesestudiante.component.css']
})
export class OfertaslaboralesestudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle1 = "none";

  OpenPopupol() {
    this.displayStyle1 = "block";
  }
  closePopuppl() {
    this.displayStyle1 = "none";
  }
}
