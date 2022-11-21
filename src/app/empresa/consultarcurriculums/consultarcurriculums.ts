import { Data } from "@angular/router";

export class consultarcurriculums{

    id?:number;
  username?: string;
  cedula?: string;
  nombres?: string;
  apellidos?: string;
  genero?: string;
  fechaNacimiento?: Data;
  ciudad?: string;
  direccion?: string;
  estadoCivil?: string;
  rutaImagen?: string;
  urlImagen?:string;
}