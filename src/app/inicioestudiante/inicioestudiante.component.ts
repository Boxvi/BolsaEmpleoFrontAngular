import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-inicioestudiante',
  templateUrl: './inicioestudiante.component.html',

  styleUrls: ['./inicioestudiante.component.css']
})
export class InicioestudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  displayStyle1 = "none";

  OpenPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
