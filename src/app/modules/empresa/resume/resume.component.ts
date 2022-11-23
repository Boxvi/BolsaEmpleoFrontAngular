import { Component, OnInit } from '@angular/core';
import { EMPRESA_MENU_OPTIONS } from 'src/app/data/constants/ui/empresa-menu-options';
import { CardOption } from 'src/app/data/interfaces/ui/card-option';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public empresaOptions: CardOption[] = EMPRESA_MENU_OPTIONS;
  constructor() { }

  ngOnInit(): void {
  }

}
