import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const LOGRO_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/logro';
@Injectable({
  providedIn: 'root'
})
export class LogroService {

  constructor(private http: HttpClient) { }


  getLogroByEstudianteId(estudiante_id: number): Observable<any> {
    return this.http.get<any>(`${LOGRO_API}/estudiante/${estudiante_id}`);
  }
}
