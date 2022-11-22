import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) {

  }
  obtenerPerfilEmpresa(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas').toPromise();
  }
  crearEmpresa(data: any): Promise<any> {
    //console.log(data);
    return this._http.post('http://localhost:9090/empresas/crear',
      data,
      {
        headers: this.headers
      }
    ).toPromise();
  }
}
