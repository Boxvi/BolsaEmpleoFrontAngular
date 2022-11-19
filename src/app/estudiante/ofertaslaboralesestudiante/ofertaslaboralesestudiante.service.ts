import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ofertaslaboralesestudiante } from './ofertaslaboralesestudiante';

import {HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
 export class OfertaslaboralesestudianteService {

    private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas'


    constructor(private http: HttpClient) {
    }

getAllOfertas(): Observable<Ofertaslaboralesestudiante[]>{

    return this.http.get(this.apiUrl).pipe(
        map(response => response as Ofertaslaboralesestudiante[])
    )
}




 }