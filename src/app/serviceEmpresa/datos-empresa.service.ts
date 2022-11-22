import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatosEmpresaService {

  constructor(private _http:HttpClient) {

  }
  obtenerPerfilEmpresa(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas').toPromise();
  }

}
