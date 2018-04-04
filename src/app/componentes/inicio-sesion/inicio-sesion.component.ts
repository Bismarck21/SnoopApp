import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  public email: string;
  public password: string;
  public mensaje: string;

  constructor(
    public authservice: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authservice.loginEmail(this.email,this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario ha iniciado correctamente.', 
      {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/personal']);    
    }).catch( (err) =>{
      console.log(err);
      this.flashMensaje.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/iniciar']);
    })
  }
}
