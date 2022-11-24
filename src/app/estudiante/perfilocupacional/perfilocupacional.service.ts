import { Injectable } from '@angular/core';
import { perfilocupacional } from './perfilocupacional';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
providedIn: 'root'
})

export class perfilocupacionalService{


    private urlEndPoint:string ="http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/perfiles";
    private httpHeaders =new HttpHeaders()
    constructor(private http: HttpClient) { }



    getperfilocupacional(id:perfilocupacional):Observable<perfilocupacional>{
      return this.http.get<perfilocupacional>(`${this.urlEndPoint}/${id}`);
    }




  create(perfilocupacional:perfilocupacional):Observable<perfilocupacional>{
    return this.http.post<perfilocupacional>(this.urlEndPoint,perfilocupacional,{headers:this.httpHeaders})
}


    }

