import { Injectable } from '@angular/core';
import  {HttpHeaders,HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})

export class experienciaService {

  private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/experiencias";
  private httpHeaders =new HttpHeaders()
  constructor(private http: HttpClient) { }

  addNewCapacitacion(experiencia: experiencia): Observable<experiencia>{

    return this.http.post<experiencia>(this.urlEndPoint, experiencia, {headers: this.httpHeaders})
    }


    getProyectos():Observable <experiencia[]>{
      return this.http.get(this.urlEndPoint).pipe(map(response=>response as experiencia[]));
    }
  getexperiencia(id:experiencia):Observable<experiencia>{
  return this.http.get<experiencia>(`${this.urlEndPoint}/${id}`);
  }


create(experiencia:experiencia):Observable<experiencia>{
  return this.http.post<experiencia>(this.urlEndPoint,experiencia,{headers:this.httpHeaders})
}
public get(urls: string){

  return this.http.get(urls)
}

}
