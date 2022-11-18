import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { informacionlaboral, experiencia } from './informacionlaboral';

@Injectable({
  providedIn: 'root'
})
export class InformacionlaboralService {

  private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/perfiles";

  constructor(private http: HttpClient) { }

getperfilocupacional():Observable <informacionlaboral[]>{
  return this.http.get(this.urlEndPoint).pipe(map(response=>response as informacionlaboral[]));
}

  getinformacionlaboral(id:informacionlaboral):Observable<informacionlaboral>{
    return this.http.get<informacionlaboral>(`${this.urlEndPoint}/${id}`);
  }

}
export class InformacionlaboralService1 {

  private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/experiencias";

  constructor(private http: HttpClient) { }




}

