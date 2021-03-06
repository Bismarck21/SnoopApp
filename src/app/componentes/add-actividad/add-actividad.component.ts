import { Component, OnInit } from '@angular/core';
import { ActividadInterface } from '../../modelos/actividad';
import { AuthService } from '../../servicios/auth.service';
import { ActividadService } from '../../servicios/actividad.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ValueTransformer } from '@angular/compiler/src/util';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';


@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.scss']
})
export class AddActividadComponent implements OnInit {
  public isUp: boolean;
  public imagen: boolean;
  selectedFiles: FileList;
  file: File;
  imgsrc: any;
  color: string = 'primary';
  mode: 'determinate';
  progressBarValue;
  actividad: ActividadInterface = {
    id: '',
    actividad: '',
    descripcion:'',
    fecha: '',
    duracion: '',
    participantes: '',
    evidencia: '',
    evinombre: '',
    evidencia2: '',
    evinombre2: '',
    evidencia3: '',
    evinombre3: '',
    evidencia4: '',
    evinombre4: '',
    evidencia5: '',
    evinombre5: '',
    tarea: '',
    grupo: '',
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
  }

  uploadpic() {
    let file = this.selectedFiles.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/Evidencias/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
      this.isUp = true;
    })
    uploadTask.downloadURL().subscribe((value) => {
      this.actividad.evidencia = value;
    })
  }

  chooseFiles2(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadpic2();  
  }

  uploadpic2() {
    let file = this.selectedFiles.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/Evidencias/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
      this.isUp = true;
    })
    uploadTask.downloadURL().subscribe((value) => {
      this.actividad.evidencia2 = value;
    })
  }

  chooseFiles3(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadpic3();  
  }

  uploadpic3() {
    let file = this.selectedFiles.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/Evidencias/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
      this.isUp = true;
    })
    uploadTask.downloadURL().subscribe((value) => {
      this.actividad.evidencia3 = value;
    })
  }

  chooseFiles4(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadpic4();  
  }

  uploadpic4() {
    let file = this.selectedFiles.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/Evidencias/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
      this.isUp = true;
    })
    uploadTask.downloadURL().subscribe((value) => {
      this.actividad.evidencia4 = value;
    })
  }

  chooseFiles5(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadpic5();  
  }

  uploadpic5() {
    let file = this.selectedFiles.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/Evidencias/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
      this.isUp = true;
    })
    uploadTask.downloadURL().subscribe((value) => {
      this.actividad.evidencia5 = value;
    })
  }

}
