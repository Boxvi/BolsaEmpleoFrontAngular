import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Capacitacionesestudiante } from 'src/app/data/interfaces/models/capacitacionesestudiante';



@Injectable({
  providedIn: 'root'
})
export class CapacitacionesestudianteService {

  private url:string= 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/capacitacion';
  private httpHeaders =  new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  addNewCapacitacion(capacitacion: Capacitacionesestudiante): Observable<Capacitacionesestudiante>{

    return this.http.post<Capacitacionesestudiante>(this.url, capacitacion, {headers: this.httpHeaders})
    }
    
//actualizar
update(capacitacion:Capacitacionesestudiante):Observable<Capacitacionesestudiante>{
  return this.http.put<Capacitacionesestudiante>(this.url, capacitacion)
}


delete(id:number): Observable<Capacitacionesestudiante>{

  return this.http.delete<Capacitacionesestudiante>(this.url+'/'+id)
}



}
