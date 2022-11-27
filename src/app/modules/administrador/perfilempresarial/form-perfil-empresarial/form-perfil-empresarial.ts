export class Empresa {
  id: number = 0;
 usuario: Usuario = new Usuario();
 sectorEmpresarial: SectorEmpresarial = new SectorEmpresarial();
  ruc: string = "";
  nombre: string = "";
  tipoEmpresa: string= "";
  razonSocial: string= "";
  departamento: string= "";
 ciudad: Ciudad = new Ciudad();
  direccion: string = "";
  sitioWeb: string = "";
  representante: Representante = new Representante();
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
    password: string ="";
    email: string = "";
    telefono: string ="";
    estado: boolean = true;
    fechaCreacion: string = "";
  }

  export class SectorEmpresarial {
    id: number = 0;
    nombre: string = "";
    descripcion: string = "";
  }

  export class Provincia {
    id: number = 0;
    nombre: string = "";
    pais: string = "";
  }

  export class Ciudad {
    id: number = 0;
    nombre: string  = "" ;
    provincia: Provincia = new Provincia();
  }
 export class Representante{
  id: number = 0;
  empresa_id: number = 0;
  nombre: string = "";
  cargo: string = "";
  telefono: string = "";
  email: string = "";
}




