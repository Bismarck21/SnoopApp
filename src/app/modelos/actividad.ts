import { Time } from "@angular/common";

export interface ActividadInterface {
    id?:string;
    titulo?: string;
    descripcion?: string;
    fecha?: any;
    duracion?: any;
    participantes?: any;
    evidencia?: any;
    fechaPublicacion?: any;
    userId?: string;
    userNombre?: string;
}