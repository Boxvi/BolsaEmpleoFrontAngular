import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Empresa} from "./form-perfil-empresarial";


@Injectable({
  providedIn: 'root'
})
export class DatosEmpresaService {


  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas";

  private urlrepre: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/contactosEmpresa";

  constructor(private _http:HttpClient) {

  }
  obtenerPerfilesEmpresa(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas').toPromise();
  }
  obtenerPerfilesRespre(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/contactosEmpresa').toPromise();
  }



  getEmpresas(id : number){
    console.log(this.urlEndPoint+"/"+id)
    return this._http.get<Empresa>(this.urlEndPoint+"/"+id);
  }
  getRepres(id : number){
    console.log(this.urlrepre+"/"+id)
    return this._http.get<Empresa>(this.urlrepre+"/"+id);
  }



}
