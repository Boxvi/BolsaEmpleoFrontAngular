import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ofertaslaboralesestudiante } from './ofertaslaboralesestudiante';
import {Postulacion} from '../detalleloflaboralesestudiante/postulacion'

import {HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OfertaslaboralesestudianteService {

    private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) {
    }

getAllOfertas(): Observable<any>{
    return this.http.get(`${this.apiUrl }/ofertas`)
}



savePostulacion(postulacion:Postulacion): Observable<any>{

    return this.http.post(`${this.apiUrl }/postulaciones`, postulacion, {headers: this.httpHeaders})
}




}
