import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActividadInterface } from '../../modelos/actividad';
import { ActividadService } from '../../servicios/actividad.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-ver-actividad',
  templateUrl: './ver-actividad.component.html',
  styleUrls: ['./ver-actividad.component.scss']
})
export class VerActividadComponent implements OnInit {

  idActividad: string;
  idUsuarioLogado: string;
  empy: any;

  actividad: ActividadInterface = {
    id: '',
    actividad: '',
    descripcion: '',
    fecha: '',
    duracion: '',
    participantes: '',
    evidencia: '',
    evidencia2: '',
    evidencia3: '',
    evidencia4: '',
    evidencia5: '',
    tarea: '',
    grupo: '',
    fechaPublicacion: '',
    userId: '',
    userNombre: '',
  }
  constructor(
    private actividadService: ActividadService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onComprobarLogado();
    this.getDetallesActividad();
  }

  onComprobarLogado() {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      }
    });
  }

  getDetallesActividad() {
    this.idActividad = this.route.snapshot.params['id'];
    this.actividadService.getOneActividad(this.idActividad).subscribe(actividad => this.actividad = actividad);
  }

  onClickDelete() {
    if (confirm('Estás seguro?')) {
      this.actividadService.deleteActividad(this.actividad);
      this.router.navigate(['/']);
    }
  }

}
