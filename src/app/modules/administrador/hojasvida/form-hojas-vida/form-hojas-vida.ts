
export class Curriculum {
  id: number = 0;
  usuario: Usuario = new Usuario();
  cedula: number = 0;
  nombres: string = "";
  apellidos: string = "";
  genero: string = "";
  fechaNacimiento: string = "";
  ciudad: Ciudad = new Ciudad();
  direccion: string = "";
  estadoCivil: string = "";
  rutaImagen: any;
  urlImagen: any;
  experiencia : Experience = new Experience();
}

export class Rol {
    id: number = 0;
    nombre: string = "";
    descripcion: string = "";
  }

  export class Usuario {
    id: number = 0;
    rol: Rol = new Rol();
    username: string = "";
    password: string = "";
    email: string = "";
    telefono: string = "";
    estado: boolean = true;
    fechaCreacion: string = "";
  }

  export class Provincia {
    id: number = 0;
    nombre: string = "";
    pais: string = "";
  }

  export class Ciudad {
    id: number = 0;
    nombre: string = "";
    provincia:Provincia = new Provincia ();
  }
export class Experience {
  id: number = 0;
  cedula: string = "";
  area_trabajo: string = "";
  institucion: string = "";
  cargo: string = "";
  duracion: string = "";
  actividad: string = "";
}


