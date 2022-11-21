import { getNgModuleById, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {Capacitacionesestudiante} from './capacitacionesestudiante'

@Injectable({
  providedIn: 'root'
})

export class CapacitacionesestudianteService{


  private url:string= 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/capacitacion';
  private httpHeaders =  new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) { }

    public get(urls: string){

      return this.http.get(urls)
    }

    public getCapacitacion(url: string){
        return this.http.get(url)
    }

    create(capacitacionesestudiante: Capacitacionesestudiante) : Observable<Capacitacionesestudiante>{

      return this.http.post<Capacitacionesestudiante>(this.url, capacitacionesestudiante, {headers: this.httpHeaders})
    }


    update(capacitacionesestudiante: Capacitacionesestudiante): Observable<Capacitacionesestudiante>{

        return this.http.put<Capacitacionesestudiante>(this.url, capacitacionesestudiante)
    }

 

}






