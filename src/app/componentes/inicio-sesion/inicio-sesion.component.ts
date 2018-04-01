import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authservice: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authservice.loginEmail(this.email,this.password)
    .then( (res) => {
        this.router.navigate(['/personal']);    
    }).catch( (err) =>{
      console.log(err);
      this.router.navigate(['/iniciar'])
    })
  }
}
