import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OfertasClase} from "./list-oferta-laborales";



@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas";

  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) { }

  obtenerOfertas(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas').toPromise();
  }

  getOferta(id : number){
    return this._http.get<OfertasClase>(this.urlEndPoint+"/"+id);
  }
}
