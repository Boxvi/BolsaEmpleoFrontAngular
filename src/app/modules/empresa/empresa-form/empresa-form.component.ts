import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { TIPOS_EMPRESAS } from 'src/app/data/constants/ui/tipos-empresas';
import { ICiudad } from 'src/app/data/interfaces/models/iciudad';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';
import { ISectorEmpresarial } from 'src/app/data/interfaces/models/isector-empresarial';
import { CiudadService } from 'src/app/data/services/api/ciudad.service';
import { AuthService } from '../../auth/services/auth.service';
import { EmpresaService } from '../services/empresa.service';
import { SectorEmpresarialService } from '../services/sector-empresarial.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  public ciudades: ICiudad[] = [];
  public sectoresEmpresariales: ISectorEmpresarial[] = [];
  public tiposEmpresas = TIPOS_EMPRESAS;
  public empresa: IEmpresa | any = {};
  public empresa_id: number;

  constructor(private route: ActivatedRoute,
    private ciudadService: CiudadService,
    private sectorEmpresService: SectorEmpresarialService,
    private authService: AuthService,
    private router: Router,
    private empresaService: EmpresaService) {

    this.empresa_id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getCiudades();
    this.getSectoresEmpresariales();

    this.empresa.username = this.authService.getUser().username;
    if (this.empresa_id) {
      //cargamos la empresa por ID
      this.empresaService.getSummaryByEmpresaId(this.empresa_id).subscribe(d => {
        this.empresa = d;
      })
    }
  }

  registrarEmpresa() {
    if (this.empresa_id) {

      this.empresaService.edit(this.empresa_id, this.empresa).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/empresa');
      })

    } else {
      this.empresaService.save(this.empresa).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/empresa');
      })
    }

  }

  getCiudades() {
    this.ciudadService.getAll().subscribe(d => {
      this.ciudades = d;
    })
  }

  getSectoresEmpresariales() {
    this.sectorEmpresService.getAll().subscribe(d => {
      this.sectoresEmpresariales = d;
    })
  }

}
