import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { datoscontacto } from './datoscontacto';



@Injectable({
  providedIn: 'root'
})


export class datoscontactoService {

private urlEndPoint: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/contactosEmpresa";

constructor(private http: HttpClient) {}


getdatoscontacto(id:datoscontacto): Observable<datoscontacto> {
return this.http.get<datoscontacto>(`${this.urlEndPoint}/${id}`);
}

}