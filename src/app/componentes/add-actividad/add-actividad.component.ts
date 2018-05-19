import { Component, OnInit } from '@angular/core';
import { ActividadInterface } from '../../modelos/actividad';
import { AuthService } from '../../servicios/auth.service';
import { ActividadService } from '../../servicios/actividad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.scss']
})
export class AddActividadComponent implements OnInit {
  actividad: ActividadInterface = {
    id: '',
    titulo: '',
    descripcion:'',
    fecha: '',
    duracion: '',
    participantes: '',
    evidencia: '',
    fechaPublicacion:'',
    userId:'',
    userNombre:''
  }

  constructor(
    private authService: AuthService,
    private actividadService: ActividadService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onGuardarActividad({value}: {value: ActividadInterface}){
    value.fechaPublicacion = (new Date()).getTime();
    this.authService.getAuth().subscribe( user => {
      value.userId = user.uid;
      value.userNombre = user.displayName;
      this.actividadService.addNewActividad(value); 
    });
    this.router.navigate(['/']);
  }

}
