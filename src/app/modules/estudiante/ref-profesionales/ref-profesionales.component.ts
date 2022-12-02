import { Component, OnInit } from '@angular/core';
import { RefProfesionales } from 'src/app/data/interfaces/models/ref-profesionales';
import Swal from 'sweetalert2';
import { RefProfesionalesService } from '../services/ref-profesionales/ref-profesionales.service';

@Component({
  selector: 'app-ref-profesionales',
  templateUrl: './ref-profesionales.component.html',
  styleUrls: ['./ref-profesionales.component.css']
})
export class RefProfesionalesComponent implements OnInit {

  arrayTabla:any []=[];
  datosTab:any;

  cedulaUsuario:any;

  instituciondatos:any;
  nombresdatos:any;
  telefonodatos:any;
  emaildatos:any;


  refProfesional: RefProfesionales = new RefProfesionales;

  constructor(private serviceRefProfesional: RefProfesionalesService) { }

  ngOnInit(): void {

    this.cedulaUsuario=localStorage.getItem('cedulaPerfil')
    this.ObTabRef();
  }

  guardardatos(){
    this.refProfesional.cedula=this.cedulaUsuario
    this.refProfesional.institucion=this.instituciondatos
    this.refProfesional.nombre=this.nombresdatos
    this.refProfesional.telefono=this.telefonodatos
    this.refProfesional.email=this.emaildatos
    console.log(this.refProfesional)
    this.serviceRefProfesional.postRefPer(this.refProfesional).subscribe(dat => {
     this.arrayTabla=[]
      this.ObTabRef()
      this.Campos()
      Swal.fire({
        icon: 'success',
        text: 'Datos Guardatos'
      });
    })
  }

  ObTabRef(){
    this.refProfesional.cedula=this.cedulaUsuario
    this.serviceRefProfesional.getTabla().subscribe(datTab =>{
      this.datosTab=datTab;
      for(var datarray in datTab){
        if(datTab[datarray].cedula == this.refProfesional.cedula){
          this.arrayTabla.push(datTab[datarray])
        }
      }
    })
  }


  EliminarTab(id:any){ 
    
    Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podrás revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
      this.serviceRefProfesional.ElimirRef(id).subscribe(result =>{
        Swal.fire('Registro Eliminado', '', 'info');
      this.arrayTabla=[]
      this.ObTabRef()
    });
    
  }
})
}


  Actualizar(datoRefProf:any){
    this.refProfesional.id=datoRefProf.id
    this.nombresdatos=datoRefProf.nombre
    this.telefonodatos=datoRefProf.telefono
    this.instituciondatos=datoRefProf.institucion
    this.emaildatos=datoRefProf.email
  }
  
  guardarEdit(){
    this.refProfesional.institucion=this.instituciondatos
    this.refProfesional.nombre=this.nombresdatos
  this.refProfesional.telefono=this.telefonodatos
  this.refProfesional.email=this.emaildatos
  this.serviceRefProfesional.ActualizarRef(this.refProfesional).subscribe( datos =>{
    console.log(datos)
    this.arrayTabla=[]
      this.ObTabRef()
      
      this.Campos()
      Swal.fire({
        icon: 'success',
        text: 'Datos Actualizados'
      });
  
  })
  }

  Campos(){

    this.nombresdatos = null
      this.telefonodatos = null
      this.instituciondatos = null
      this.emaildatos = null
  }
}