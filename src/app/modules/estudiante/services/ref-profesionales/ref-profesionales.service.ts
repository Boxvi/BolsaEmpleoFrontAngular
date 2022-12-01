import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RefProfesionales } from 'src/app/data/interfaces/models/ref-profesionales';

@Injectable({
  providedIn: 'root'
})
export class RefProfesionalesService {

  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }


  postRefPer(referencia:RefProfesionales):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/referenciaProfesional`,referencia)
  }

  getTabla():Observable<any>{
    return this.http.get(`${this.apiUrl}/referenciaProfesional`)
  }

  ElimirRef(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/referenciaProfesional/${id}`)
  }
  
  ActualizarRef(referencia:RefProfesionales):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/referenciaProfesional/${referencia.id}`,referencia)
  }

  getUsuarios():Observable<any>{
    return this.http.get(`${this.apiUrl}/usuarios`)
  }
}
