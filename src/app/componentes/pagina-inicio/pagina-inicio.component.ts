import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../servicios/actividad.service';
import { ActividadInterface } from '../../modelos/actividad';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss']
})
export class PaginaInicioComponent implements OnInit {
  filtro: string;
  startAt = new Subject();
  endAt = new Subject();
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  actividades;
  allactividades;

  constructor(
    private actividadService: ActividadService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.listarActividades();
  }

  listarActividades(){
    this.actividadService.getAllActividades().subscribe(actividades => this.actividades = actividades);
  }

  search($event) {
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((actividades) => {
        this.actividades = actividades;
      })
    })
  }

  search2($event) {
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequeryTitulo(value[0], value[1]).subscribe((actividades) => {
        this.actividades = actividades;
      })
    })
  }

  search3($event) {
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequeryGrupo(value[0], value[1]).subscribe((actividades) => {
        this.actividades = actividades;
      })
    })
  }

  firequery(start, end) {
    return this.afs.collection('actividades', ref => ref.limit(10).orderBy('userNombre').startAt(start).endAt(end)).valueChanges();
  }

  firequeryTitulo(start, end) {
    return this.afs.collection('actividades', ref => ref.limit(10).orderBy('actividad').startAt(start).endAt(end)).valueChanges();
  }

  firequeryGrupo(start, end) {
    return this.afs.collection('actividades', ref => ref.limit(10).orderBy('grupo').startAt(start).endAt(end)).valueChanges();
  }

}
