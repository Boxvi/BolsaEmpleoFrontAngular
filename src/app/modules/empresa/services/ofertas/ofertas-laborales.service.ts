import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasLaboralesService {

  API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  getAllOfAplicadas(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  getAllEmpresas(idEmpresa: number):Observable<any> {
    return this.http.get<any>(`${this.API}/empresas/${idEmpresa}`);
  }

  getOfAplicadaById(id: number): Observable<any> {
    return this.http.get(`${this.API}/ofertas/empresa/${id}`);
  }

  deleteOfAplicada(id: number) {
    return this.http.delete(`${this.API}/ofertas/${id}`);
  }

}
