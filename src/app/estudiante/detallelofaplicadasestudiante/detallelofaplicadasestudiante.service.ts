import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Detallelofaplicadasestudiante } from './detallelofaplicadasestudiante';



@Injectable({
  providedIn: 'root'
})

export class Detallelofaplicadasestudianteservice{

private urlAllServices: string = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com';
    constructor(private http: HttpClient) { }
    
  public  getbyId(id:Detallelofaplicadasestudiante): Observable<Detallelofaplicadasestudiante> {

        return this.http.get<Detallelofaplicadasestudiante>(`${this.urlAllServices}/ofertas/${id}`);
    }








}