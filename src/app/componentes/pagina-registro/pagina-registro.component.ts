import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.component.html',
  styleUrls: ['./pagina-registro.component.scss']
})
export class PaginaRegistroComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }
 
  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res)=>{
      this.flashMensaje.show('Usuario creado correctamente.', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/personal']);
    }).catch( (err)=> {
      this.flashMensaje.show(err.message, 
      {cssClass: 'alert-danger', timeout: 4000});
    });
  }

}
