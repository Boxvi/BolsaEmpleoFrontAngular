import { Component, OnInit } from '@angular/core';
import {Estudiante, Postulaciones} from "./list-postulaciones";
import {ListPostulacionesService} from "./list-postulaciones.service";

@Component({
  selector: 'app-list-postulaciones',
  templateUrl: './list-postulaciones.component.html',
  styleUrls: ['./list-postulaciones.component.css']
})
export class ListPostulacionesComponent implements OnInit {

  public postulaciones: Postulaciones[] = [];
  public estudiante: Estudiante = new Estudiante();

  filterPost: string= "";

  constructor(private listPostulacionesService: ListPostulacionesService) {
  }

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas(): void {
    this.listPostulacionesService.getPostulaciones().subscribe(
      postulacion => {
        this.postulaciones = postulacion
      }
    )
  }

  getEstudianteByCedula(cedula: string): void {
    this.listPostulacionesService.getEstudianteByCedula(cedula).subscribe(
      postulaciones => this.estudiante = postulaciones
    )
  }


}
/*
  private getOferta() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.datosOferta.getOferta(id).subscribe(
            of => {
              this.ofertas = of

              this.datosOferta.getOfertaByEmpresa(this.ofertas.empresa.id).subscribe(
                of => this.ofertaE = of
              )

            }
          );
        }
      }
    );
 */
