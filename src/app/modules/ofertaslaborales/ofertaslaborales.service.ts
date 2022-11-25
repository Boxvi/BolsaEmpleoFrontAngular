import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertaslaboralesService {
  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'
  constructor(private http: HttpClient) { }


  getAllOfertas(): Observable<any>{
    return this.http.get(`${this.apiUrl }/ofertas`)
}


}
