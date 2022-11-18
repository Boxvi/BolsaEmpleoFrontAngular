import { HDV } from './HojaDeVida.json';
import { HojaDeVida } from './HojaDeVida';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HojaDeVidaService {

  constructor() { }

  getHojaDeVida(): Observable<HojaDeVida[]> {

    return of (HDV);
  }
}
