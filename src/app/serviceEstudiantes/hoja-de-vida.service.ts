import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HojaDeVidaService {

  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) {

  }
  obtenerHojadeVida(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/estudiantes').toPromise();
  }
  crearHojadeVida(data: any): Promise<any> {
    //console.log(data);
    return this._http.post('http://localhost:9090/estudiantes/crear',
      data,
      {
        headers: this.headers
      }
    ).toPromise();
  }
}
