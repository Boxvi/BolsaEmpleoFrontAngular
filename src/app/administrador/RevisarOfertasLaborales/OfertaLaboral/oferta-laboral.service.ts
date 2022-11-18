import { OFERTA } from './oferta-laboral.json';
import { OfertaLaboral } from './oferta-laboral';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaLaboralService {

  constructor() { }

  getOfertas(): Observable<OfertaLaboral[]> {

    return of(OFERTA);
  }
}
