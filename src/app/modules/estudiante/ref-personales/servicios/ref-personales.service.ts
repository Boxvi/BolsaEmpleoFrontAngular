import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RefPersonales } from '../modelos/ref-personales';

@Injectable({
  providedIn: 'root'
})
export class RefPersonalesService {


  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'
  private apiUrl2 = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }


  postRefPer(referencia:RefPersonales):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/referenciaPersonal`,referencia)
  }

  getTabla():Observable<any>{
    return this.http.get(`${this.apiUrl}/referenciaPersonal`)
  }

  ElimirRef(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/referenciaPersonal/${id}`)
  }
  
  ActualizarRef(referencia:RefPersonales):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/referenciaPersonal/${referencia.id}`,referencia)
  }

  getUsuarios():Observable<any>{
    return this.http.get(`${this.apiUrl}/usuarios`)
  }

  
}
