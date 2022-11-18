import { CV } from './cv.json';
import { Cv } from './cv';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cvService {

  constructor() { }

  getCv(): Observable<Cv[]> {

    return of(CV);
  }
}
