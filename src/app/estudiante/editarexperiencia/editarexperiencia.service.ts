import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { editarexperiencia } from './editarexperiencia';
@Injectable({
providedIn: 'root'
})

export class editarexperienciaService{


    private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/experiencias";
    private httpHeaders =new HttpHeaders()
    constructor(private http: HttpClient) { }



    getexperiencia(id:editarexperiencia):Observable<editarexperiencia>{
      return this.http.get<editarexperiencia>(`${this.urlEndPoint}/${id}`);
    }

    editar(editarexperiencia:editarexperiencia){
      console.log(editarexperiencia)
      return this.http.put<editarexperiencia>(this.urlEndPoint+'/'+editarexperiencia.id,editarexperiencia,{headers:this.httpHeaders})
    }

    }
