import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILogro } from 'src/app/data/interfaces/models/ilogro';
import { LogroService } from '../../services/logros/logro.service';

@Component({
  selector: 'app-list-logros',
  templateUrl: './list-logros.component.html',
  styleUrls: ['./list-logros.component.css']
})
export class ListLogrosComponent implements OnInit {

  public logros: ILogro[] = [];
  public estudiante_id: number;
  constructor(private logroService: LogroService,
    private route: ActivatedRoute) {
    this.estudiante_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.estudiante_id) {
      this.logroService.getLogroByEstudianteId(this.estudiante_id).subscribe(r => {
        this.logros = r;
      })
    }
  }

}
