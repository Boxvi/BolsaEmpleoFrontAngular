import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() sideNavStatus:boolean = false;
  
  optionList = [
    {
      name: 'Curriculum Vitae',
      icon: 'bi bi-file-person-fill'
    },
    {
      name: 'Ofertas',
      icon: 'bi bi-newspaper'
    },
    {
      name: 'Perfil Empresarial',
      icon: 'bi bi-linkedin'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
