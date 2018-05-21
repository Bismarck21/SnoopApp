import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActividadInterface } from '../../modelos/actividad';
import { ActividadService } from '../../servicios/actividad.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.scss']
})
export class EditarActividadComponent implements OnInit {
  idActividad: string;
  actividad: ActividadInterface = {
    id: '',
    titulo: '',
    descripcion: '',
    fecha: '',
    duracion: '',
    participantes: '',
    evidencia: '',
    fechaPublicacion: '',
    userId: '',
    userNombre: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actividadService: ActividadService
  ) { }

  ngOnInit() {
    this.getDetallesActividad();
  }

  getDetallesActividad() {
    this.idActividad = this.route.snapshot.params['id'];
    this.actividadService.getOneActividad(this.idActividad).subscribe(actividad => this.actividad = actividad);
  }

  onModificarActividad({ value }: { value: ActividadInterface }) {
    value.id = this.idActividad;
    this.actividadService.updateActividad(value);
    this.router.navigate(['/ver-actividad/' + this.idActividad]);
  }

}
