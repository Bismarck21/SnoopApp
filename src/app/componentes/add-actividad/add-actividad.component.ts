import { Component, OnInit } from '@angular/core';
import { ActividadInterface } from '../../modelos/actividad';
import { AuthService } from '../../servicios/auth.service';
import { ActividadService } from '../../servicios/actividad.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.scss']
})
export class AddActividadComponent implements OnInit {
  public isUp: boolean;
  selectedFiles: FileList;
  file: File;
  imgsrc: any;
  color: string = 'primary';
  mode: 'determinate';
  progressBarValue;
  actividad: ActividadInterface = {
    id: '',
    titulo: '',
    descripcion:'',
    fecha: '',
    duracion: '',
    participantes: '',
    evidencia: '',
    tarea: '',
    fechaPublicacion:'',
    userId:'',
    userNombre:''
  }

  constructor(
    private authService: AuthService,
    private actividadService: ActividadService,
    private router: Router,
    private storage: AngularFireStorage
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
  }

}
