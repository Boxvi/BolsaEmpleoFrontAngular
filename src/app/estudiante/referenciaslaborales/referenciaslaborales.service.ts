import { Injectable } from '@angular/core';
import  {HttpHeaders,HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { referenciaslaborales } from './referenciaslaborales';


@Injectable({
  providedIn: 'root'
})

export class referencialaboralService {

  private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/referenciaProfesional";
  private httpHeaders =new HttpHeaders()
  constructor(private http: HttpClient) { }


  getreferenciaslaborales(id:referenciaslaborales):Observable<referenciaslaborales>{
  return this.http.get<referenciaslaborales>(`${this.urlEndPoint}/${id}`);
  }
  create(referenciaslaborales:referenciaslaborales):Observable<referenciaslaborales>{
    return this.http.post<referenciaslaborales>(this.urlEndPoint,referenciaslaborales,{headers:this.httpHeaders})
}



}
