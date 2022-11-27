import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ofertas} from "./form-ofertas-laborales";


@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";

  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) { }

  getOferta(id : number){
    return this._http.get<Ofertas>(this.urlEndPoint+"/ofertas/"+id);
  }

  /*
  obtenerOfertas(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas').toPromise();
  }

 */
}
