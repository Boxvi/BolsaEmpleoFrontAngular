import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportesService} from "./reportes.service";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  numeroEmpresas: number = 0;
  numeroEmpleados: number = 0;
  numeroUsuarios: number = 0;
  ofertasLaborales: number = 0;
  numeroPostulaciones: number = 0;

  constructor(private reportes: ReportesService) {
  }

  ngOnInit(): void {
    this.getEstudiantes();
    this.getEmpresas();
    this.getUsuarios();
    this.getOfertasLaborales();
    this.getPostulaciones();

  }

  getEstudiantes() {
    this.reportes.getEstudiantes().subscribe(
      x => {
        this.numeroEmpleados = x.length;
      }
    );
  }

  getEmpresas() {
    this.reportes.getEmpresas().subscribe(
      x => {
        this.numeroEmpresas = x.length;
      }
    );
  }


  private getUsuarios() {
    this.reportes.getUsuarios().subscribe(
      x => {
        this.numeroUsuarios = x.length;
      }
    )
  }

  private getOfertasLaborales() {
    this.reportes.getOfertasLaborales().subscribe(
      x => {
        this.ofertasLaborales = x.length;
      }
    )
  }

  private getPostulaciones() {
    this.reportes.getPostulaciones().subscribe(
      x => {
        this.numeroPostulaciones = x.length;
      }
    )
  }
}
