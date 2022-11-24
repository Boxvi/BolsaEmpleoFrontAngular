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

    const response = { error: true, message: '', icon: '' };

    return this.http.post<any>(`${AUTH_API}/signup`, data).pipe(
      map(r => {
        response.error = false;
        response.message = 'Usuario Registrado';
        response.icon = 'success';
        return response;

      }),
      catchError(e => {
        console.log(e);
        response.message = e.error.message;
        response.icon = 'error';
        return of(response);
      })
    );

  }
}
