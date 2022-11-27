import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PerfilEmpresa} from "./list-perfil-empresarial";


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas";


  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) {

  }
  obtenerPerfilEmpresa(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas').toPromise();
  }

  getEmpresas(id : number){
    return this._http.get<PerfilEmpresa>(this.urlEndPoint+"/"+id);
  }

}
