import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { datosempresa } from './datosempresa'; 



@Injectable({
  providedIn: 'root'
})


export class datoscontactoService {

private urlEndPoint: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas";

constructor(private http: HttpClient) {}


getdatosempresa(id:datosempresa): Observable<datosempresa> {
return this.http.get<datosempresa>(`${this.urlEndPoint}/${id}`);
}

}