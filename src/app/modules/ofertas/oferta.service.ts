import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const OFERTAS_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(OFERTAS_API);
  }

  getOfertasById(id: number): Observable<any> {
    return this.http.get(`${OFERTAS_API}/resumen/${id}`);
  }


}
