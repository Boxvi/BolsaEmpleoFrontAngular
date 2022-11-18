import { Injectable } from '@angular/core';
import { REVOFERTAS } from './revoferta-laboral.json';
import { Revofertalaboral } from './revofertalaboral';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevofertalaboralService {

  constructor() { }

  getRevOfertas(): Observable<Revofertalaboral[]> {

    return of(REVOFERTAS);
  }
}
