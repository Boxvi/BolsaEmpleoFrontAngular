import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Iusuario } from 'src/app/data/interfaces/models/iusuario';

const AUTH_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  signUp(data: Iusuario): Observable<any> {

    //const response = { error: true, message: 'Registro Inválido' };

    return this.http.post<any>(`${AUTH_API}/signup`, data);

  }
}
