import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {Ofertasaplicadasestudiante,Estudiante}from './ofertasaplicadasestudiante'



@Injectable({
  providedIn: 'root'
})


export class OfertasaplicadasestudianteService {

    public apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com';
  
  constructor(private http: HttpClient) { }
/*
  public getbyCedula(id:Ofertasaplicadasestudiante):Observable<Ofertasaplicadasestudiante>{

    return this.http.get<Ofertasaplicadasestudiante>(`${this.apiUrl}/postulaciones/by_est/${this.id}`)
  }*/
    


public get(url:string){
    return this.http.get(url)
}

public getAllbyUser() {

return this.http.get<Ofertasaplicadasestudiante>(`${this.apiUrl}/postulaciones/by_est/019993845`)
}






}
