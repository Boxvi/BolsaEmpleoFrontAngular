import { getNgModuleById, Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {Detalleloflaboralesestudiante } from './detalleloflaboralesestudiante'



@Injectable({
  providedIn: 'root'
})


export class detalleloflaboralesestudianteService {

private urlEndPoint: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas";

constructor(private http: HttpClient) {}


getIDoferta(id:Detalleloflaboralesestudiante): Observable<Detalleloflaboralesestudiante> {
return this.http.get<Detalleloflaboralesestudiante>(`${this.urlEndPoint}/${id}`);
}

}