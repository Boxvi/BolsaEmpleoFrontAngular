import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class OfertasaplicadasestudianteService {

  constructor(private http: HttpClient) { }

public get(url:string){
    return this.http.get(url)
}

}
