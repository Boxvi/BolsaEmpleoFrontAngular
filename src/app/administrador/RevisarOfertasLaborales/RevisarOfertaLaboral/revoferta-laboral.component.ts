import { RevofertalaboralService } from './revofertalaboral.service';
import { Component, OnInit } from '@angular/core';
import { REVOFERTAS } from './revoferta-laboral.json';
import { Revofertalaboral } from './revofertalaboral';

@Component({
  selector: 'app-revoferta-laboral',
  templateUrl: './revoferta-laboral.component.html'
})
export class RevofertaLaboralComponent implements OnInit {

  revOfertas: Revofertalaboral[]= [];

  constructor(private revOfertasService: RevofertalaboralService) { }

  ngOnInit(): void {

    this.revOfertasService.getRevOfertas().subscribe(

      revOfertas => this.revOfertas = revOfertas
    );
  }

}
