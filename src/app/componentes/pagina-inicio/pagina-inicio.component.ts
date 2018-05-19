import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../servicios/actividad.service';
import { ActividadInterface } from '../../modelos/actividad';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss']
})
export class PaginaInicioComponent implements OnInit {
  actividades: ActividadInterface[];

  constructor(
    private actividadService: ActividadService
  ) { }

  ngOnInit() {
    this.listarActividades();
  }

  listarActividades(){
    this.actividadService.getAllActividades().subscribe(actividades => this.actividades = actividades);
  }

}
