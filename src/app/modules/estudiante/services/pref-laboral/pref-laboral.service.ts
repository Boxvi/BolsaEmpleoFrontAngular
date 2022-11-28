import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrefLaboral } from 'src/app/data/interfaces/models/pref-laboral';

@Injectable({
  providedIn: 'root'
})
export class PrefLaboralService {


  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'


  constructor(private http: HttpClient) { }

  postPreferenciaL(prefLaboral:PrefLaboral):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/preferenciasempleo`,prefLaboral)
  
  }
  
  getTabla(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/preferenciasempleo/estudiante/${id}`)
  }
  
  Elimir(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/preferenciasempleo/${id}`)
  }
  
  ActualizarPref(prefLaboral:PrefLaboral):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/preferenciasempleo/${prefLaboral.id}`,prefLaboral)
  
  }

}
