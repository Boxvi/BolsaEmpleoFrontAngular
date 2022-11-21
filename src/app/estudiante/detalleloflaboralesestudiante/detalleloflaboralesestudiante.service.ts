import { getNgModuleById, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Detalleloflaboralesestudiante } from './detalleloflaboralesestudiante';
import { Postulacion } from './postulacion';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class detalleloflaboralesestudianteService {

private urlEndPoint: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas";
private urlAllServices: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
constructor(private http: HttpClient) {}

savePostulacion(postulacion:Postulacion): Observable<any>{

  return this.http.post(`${this.urlAllServices }/postulaciones`, postulacion, {headers: this.httpHeaders})
}

getIDoferta(id:Detalleloflaboralesestudiante): Observable<Detalleloflaboralesestudiante> {
return this.http.get<Detalleloflaboralesestudiante>(`${this.urlEndPoint}/${id}`);
}







}