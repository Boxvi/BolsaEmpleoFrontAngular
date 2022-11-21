declare module Ofertasaplicadasestudiante {

    export interface Rol {
        id: number;
        nombre: string;
        descripcion: string;
    }

    export interface Usuario {
        id: number;
        rol: Rol;
        username: string;
        password: string;
        email: string;
        telefono: string;
        estado: boolean;
        fechaCreacion: string;
    }

    export interface SectorEmpresarial {
        id: number;
        nombre: string;
        descripcion: string;
    }

    export interface Provincia {
        id: number;
        nombre: string;
        pais: string;
    }

    export interface Ciudad {
        id: number;
        nombre: string;
        provincia: Provincia;
    }

    export interface Empresa {
        id: number;
        usuario: Usuario;
        sectorEmpresarial: SectorEmpresarial;
        ruc: string;
        nombre: string;
        tipoEmpresa: string;
        razonSocial: string;
        departamento: string;
        ciudad: Ciudad;
        direccion: string;
        sitioWeb: string;
    }

    export interface Provincia2 {
        id: number;
        nombre: string;
        pais: string;
    }

    export interface Ciudad2 {
        id: number;
        nombre: string;
        provincia: Provincia2;
    }

    export interface OfertaLaboral {
        id: number;
        cargo: string;
        descripcion: string;
        area_conocimiento: string;
        salario: string;
        jornada: string;
        requisitos_academicos: string;
        experiencia: string;
        ubicacion: string;
        fecha_inicio: Date;
        fecha_fin: Date;
        empresa: Empresa;
        ciudad: Ciudad2;
    }

    export interface Rol2 {
        id: number;
        nombre: string;
        descripcion: string;
    }

    export interface Usuario2 {
        id: number;
        rol: Rol2;
        username: string;
        password: string;
        email: string;
        telefono: string;
        estado: boolean;
        fechaCreacion: string;
    }

    export interface Provincia3 {
        id: number;
        nombre: string;
        pais: string;
    }

    export interface Ciudad3 {
        id: number;
        nombre: string;
        provincia: Provincia3;
    }

    export interface Estudiante {
        id: number;
        usuario: Usuario2;
        cedula: string;
        nombres: string;
        apellidos: string;
        genero: string;
        fechaNacimiento: string;
        ciudad: Ciudad3;
        direccion: string;
        estadoCivil: string;
        rutaImagen: string;
        urlImagen: string;
    }

    export interface RootObject {
        id: number;
        fecha: Date;
        estado: string;
        ofertaLaboral: OfertaLaboral;
        estudiante: Estudiante;
    }

}
