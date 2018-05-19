import { Injectable } from '@angular/core';
import { ActividadInterface } from '../modelos/Actividad';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ActividadService {
  actividadCollection: AngularFirestoreCollection<ActividadInterface>;
  actividadDoc: AngularFirestoreDocument<ActividadInterface>;
  actividades: Observable<ActividadInterface[]>;
  actividad: Observable<ActividadInterface>;
  constructor(
    private afs: AngularFirestore) {
    this.actividadCollection = this.afs.collection('actividades', ref => ref);
  }

  addNewActividad(actividad: ActividadInterface) {
    this.actividadCollection.add(actividad);
  }

  getAllActividades():Observable<ActividadInterface[]>{
    this.actividades = this.actividadCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => { 
        const data = action.payload.doc.data() as ActividadInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.actividades;
   }  

   getOneActividad(idActividad: string){
    this.actividadDoc = this.afs.doc<ActividadInterface>(`actividades/${idActividad}`);
    this.actividad = this.actividadDoc.snapshotChanges().map(action=>{
      if(action.payload.exists === false){
        return null;
      }else{
        const data = action.payload.data() as ActividadInterface;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.actividad;
   }  

   updateActividad(actividad: ActividadInterface){
    this.actividadDoc = this.afs.doc(`actividades/${actividad.id}`);
    this.actividadDoc.update(actividad);
  }   
  deleteActividad(actividad: ActividadInterface){
   this.actividadDoc = this.afs.doc(`actividades/${actividad.id}`);
   this.actividadDoc.delete();
  }

}
