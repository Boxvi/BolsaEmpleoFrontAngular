import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curriculum} from "./form-hojas-vida";


@Injectable({
  providedIn: 'root'
})
export class CurriculumEstudianteService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/estudiantes";
  private urlprofecionalRef: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/referenciaProfesional";
  private urlcapacitacion: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/capacitacion";
  private urleducaciones: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/educaciones";
  private urlpersonalRef: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/referenciaPersonal";
  private urlexperiencia: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/experiencias";

  constructor(private _http:HttpClient) {

  }

  getEstudiante(id : number){
    console.log(this.urlEndPoint+"/"+id)
    return this._http.get<Curriculum>(this.urlEndPoint+"/"+id);
  }
  getCapacitacion(id : number){
    console.log(this.urlcapacitacion+"/"+id)
    return this._http.get<Curriculum>(this.urlcapacitacion+"/"+id);
  }
  getEducaciones(id : number){
    console.log(this.urleducaciones+"/"+id)
    return this._http.get<Curriculum>(this.urleducaciones+"/"+id);
  }
  getPersonalRef(id : number){
    console.log(this.urlpersonalRef+"/"+id)
    return this._http.get<Curriculum>(this.urlpersonalRef+"/"+id);
  }
  getProfecionalRef(id : number){
    console.log(this.urlprofecionalRef+"/"+id)
    return this._http.get<Curriculum>(this.urlprofecionalRef+"/"+id);
  }
  getExperiencia(id : number){
    console.log(this.urlexperiencia+"/"+id)
    return this._http.get<Curriculum>(this.urlexperiencia+"/"+id);
  }
}

