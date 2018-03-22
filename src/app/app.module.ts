import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    PaginaRegistroComponent,
    NavegacionComponent,
    InicioSesionComponent,
    PersonalComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
