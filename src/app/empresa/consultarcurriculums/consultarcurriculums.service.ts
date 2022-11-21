import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { consultarcurriculums } from './consultarcurriculums';  



@Injectable({
  providedIn: 'root'
})


export class consultarcurriculumsService {

private urlEndPoint: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/estudiantes";

constructor(private http: HttpClient) {}


getconsultarcurriculums(id:consultarcurriculums): Observable<consultarcurriculums> {
return this.http.get<consultarcurriculums>(`${this.urlEndPoint}/${id}`);
}

}