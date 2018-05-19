import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { PaginaRegistroComponent } from './componentes/pagina-registro/pagina-registro.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AuthService } from './servicios/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { AddActividadComponent } from './componentes/add-actividad/add-actividad.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EditarActividadComponent } from './componentes/editar-actividad/editar-actividad.component';
import { VerActividadComponent } from './componentes/ver-actividad/ver-actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    PaginaRegistroComponent,
    NavegacionComponent,
    InicioSesionComponent,
    PersonalComponent,
    NoEncontradoComponent,
    AddActividadComponent,
    AdminComponent,
    AcercaComponent,
    EditarActividadComponent,
    VerActividadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
