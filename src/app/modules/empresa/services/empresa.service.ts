import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const EMPRESA_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresa_id: number = 0;

  constructor(private http: HttpClient) { }
  setId(empresa_id: number) {
    this.empresa_id = empresa_id;
  }

  getId() {
    return this.empresa_id;
  }

  getEmpresaByUserId(usuario_id: number): Observable<any> {
    return this.http.get<any>(`${EMPRESA_API}/usuario/${usuario_id}`);
  }
  
}
