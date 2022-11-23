import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { consultarcurriculumstabla } from './consultarcurriculumstabla';

@Injectable({
    providedIn: 'root'
  })
  
  
  export class consultarcurriculumstablaService {
  
  private urlEndPoint: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/contactosEmpresa";
  
  constructor(private http: HttpClient) {}
  
  
  getconsultarcurriculumstabla(id:consultarcurriculumstabla): Observable<consultarcurriculumstabla> {
  return this.http.get<consultarcurriculumstabla>(`${this.urlEndPoint}/${id}`);
  }
  
  }