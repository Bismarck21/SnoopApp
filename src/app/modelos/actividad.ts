import { Time } from "@angular/common";

export interface ActividadInterface {
    id?:string;
    actividad?: string;
    descripcion?: string;
    fecha?: any;
    duracion?: any;
    participantes?: any;
    evidencia?: any;
    tarea?: any;
    grupo?: any;
    fechaPublicacion?: any;
    userId?: string;
    userNombre?: string;
}