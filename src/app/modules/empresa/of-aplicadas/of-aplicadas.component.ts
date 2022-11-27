import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OfertasAplicadasComponent } from '../../ofertas/ofertas-aplicadas/ofertas-aplicadas.component';
import { OfertasLaboralesService } from '../services/ofertas/ofertas-laborales.service';

@Component({
  selector: 'app-of-aplicadas',
  templateUrl: './of-aplicadas.component.html',
  styleUrls: ['./of-aplicadas.component.css']
})
export class OfAplicadasComponent implements OnInit {

  empresaDatos:any;
  idemp:any;

  constructor(private ofaplicadas:OfertasLaboralesService) { }

  ngOnInit(): void {

    this.OfertasAplicadasComponent();
  }

  OfertasAplicadasComponent(){
    this.idemp=localStorage.getItem('idEmpresa')
    this.ofaplicadas.getOfAplicadaById(this.idemp).subscribe( data => {
      this.empresaDatos=data
      console.log(data)
    })
  }

  estadoOferta(estado: string): string {

    switch (estado) {
      case 'En espera':
        return 'text-bg-secondary';
      case 'En revisión':
        return 'text-bg-primary';
      case 'Aprobado':
        return 'text-bg-success';
    }
    return 'text-bg-light';

  }

  deletePostulacion(id: number) {
    Swal.fire({
      title: '¿Deseas anular tu postulación a esta oferta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ofaplicadas.deleteOfAplicada(id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.OfertasAplicadasComponent();
        });

      }
    })
  }

}
