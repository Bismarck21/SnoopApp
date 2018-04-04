import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PaginaRegistroComponent } from './componentes/pagina-registro/pagina-registro.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: PaginaInicioComponent},
  {path: 'iniciar', component: InicioSesionComponent},
  {path: 'registro', component: PaginaRegistroComponent},
  {path: 'personal', component: PersonalComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
