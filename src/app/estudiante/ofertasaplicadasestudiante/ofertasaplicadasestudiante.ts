export interface Ofertasaplicadasestudiante {
    id?:            number;
    fecha?:         Date;
    estado?:        string;
    ofertaLaboral?: OfertaLaboral;
    estudiante?:    Estudiante;
}

export interface Estudiante {
    id?:              number;
    usuario?:         Usuario;
    cedula?:          string;
    nombres?:         string;
    apellidos?:       string;
    genero?:          string;
    fechaNacimiento?: Date;
    ciudad?:          Ciudad;
    direccion?:       string;
    estadoCivil?:     string;
    rutaImagen?:      string;
    urlImagen?:       string;
}

export interface Ciudad {
    id?:        number;
    nombre?:    string;
    provincia?: Provincia;
}

export interface Provincia {
    id?:     number;
    nombre?: string;
    pais?:   string;
}

export interface Usuario {
    id?:            number;
    rol?:           Rol;
    username?:      string;
    password?:      string;
    email?:         string;
    telefono?:      string;
    estado?:        boolean;
    fechaCreacion?: Date;
}

export interface Rol {
    id?:          number;
    nombre?:      string;
    descripcion?: string;
}

export interface OfertaLaboral {
    id?:                    number;
    cargo?:                 string;
    descripcion?:           string;
    area_conocimiento?:     string;
    salario?:               string;
    jornada?:               string;
    requisitos_academicos?: string;
    experiencia?:           string;
    ubicacion?:             string;
    fecha_inicio?:          Date;
    fecha_fin?:             Date;
    empresa?:               Empresa;
    ciudad?:                Ciudad;
}

export interface Empresa {
    id?:                number;
    usuario?:           Usuario;
    sectorEmpresarial?: Rol;
    ruc?:               string;
    nombre?:            string;
    tipoEmpresa?:       string;
    razonSocial?:       string;
    departamento?:      string;
    ciudad?:            Ciudad;
    direccion?:         string;
    sitioWeb?:          string;
}

