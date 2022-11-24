import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { editarperfilocupacional } from './ediatarperfilocupacional';
@Injectable({
providedIn: 'root'
})

export class editarperfilocupacionalService{


    private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/perfiles";
    private httpHeaders =new HttpHeaders()
    constructor(private http: HttpClient) { }



    getperfilocupacional(id:editarperfilocupacional):Observable<editarperfilocupacional>{
      return this.http.get<editarperfilocupacional>(`${this.urlEndPoint}/${id}`);
    }

    editar(editarperfilocupacional:editarperfilocupacional){

      console.log(editarperfilocupacional)
      return this.http.put<editarperfilocupacional>(this.urlEndPoint+'/'+editarperfilocupacional.id,editarperfilocupacional,{headers:this.httpHeaders})
    }

    }
