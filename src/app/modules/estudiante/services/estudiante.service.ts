import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const ESTUDIANTE_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/estudiantes';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudianteByUserId(usuario_id: number): Observable<any> {
    return this.http.get<any>(`${ESTUDIANTE_API}/usuario/${usuario_id}`);
  }

  getEstudianteById(id:number):Observable<any>{
    return this.http.get<any>(`${ESTUDIANTE_API}/${id}`);
  }

}
