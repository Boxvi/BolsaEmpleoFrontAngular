import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { edireferenciaslaborales } from './edireferenciaslaborales';
@Injectable({
providedIn: 'root'
})

export class edireferenciaslaboralesService{


    private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/referenciaProfesional";
    private httpHeaders =new HttpHeaders()
    constructor(private http: HttpClient) { }



    getreferenciaslaborales(id:edireferenciaslaborales):Observable<edireferenciaslaborales>{
      return this.http.get<edireferenciaslaborales>(`${this.urlEndPoint}/${id}`);
    }

    editar(edireferenciaslaborales:edireferenciaslaborales){
      console.log(edireferenciaslaborales)
      return this.http.put<edireferenciaslaborales>(this.urlEndPoint+'/'+edireferenciaslaborales.id,edireferenciaslaborales,{headers:this.httpHeaders})
    }

    }
