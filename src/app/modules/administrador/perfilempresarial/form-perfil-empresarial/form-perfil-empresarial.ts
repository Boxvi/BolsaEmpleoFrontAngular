export class Empresa {
  id: number = 0;
  usuario: Usuario = new  Usuario();
  sectorEmpresarial: SectorEmpresarial = new SectorEmpresarial();
  ruc?: string;
  nombre?: string;
  tipoEmpresa?: string;
  razonSocial?: string;
  departamento?: string;
  ciudad?: Ciudad;
  direccion?: string;
  sitioWeb?: string;
}

export class Ciudad {
  id?: number;
  nombre?: string;
  provincia?: Provincia;
}

export class Provincia {
  id?: number;
  nombre?: string;
  pais?: string;
}

export class SectorEmpresarial {
  id?: number;
  nombre?: string;
  descripcion?: string;
}

export class Usuario {
  id: number = 0;
  rol: string="";
  username?: string;
  password?: string;
  email?: string;
  telefono?: string;
  estado?: boolean;
  fechaCreacion?: Date;
}

export class ContactoEmpresa {
  id?: number;
  empresa_id?: number;
  nombre?: string;
  cargo?: string;
  telefono?: string;
  email?: string;
}

