import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActividadInterface } from '../../modelos/actividad';
import { ActividadService } from '../../servicios/actividad.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.scss']
})
export class EditarActividadComponent implements OnInit {
  public isUp: boolean;
  selectedFiles: FileList;
  file: File;
  imgsrc: any;
  color: string = 'primary';
  mode: 'determinate';
  progressBarValue;
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
    private actividadService: ActividadService,
    private storage: AngularFireStorage
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

  chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadpic();  
      this.isUp = true;
  }

  uploadpic() {
    let file = this.selectedFiles.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/Evidencias/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
    })
    uploadTask.downloadURL().subscribe((value) => {
      this.actividad.evidencia = value;
    })
  }

}
