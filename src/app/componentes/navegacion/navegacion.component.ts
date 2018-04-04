import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  public isLogin: boolean;
  public nombreUsuario: string;
  public email: string;
  public fotoUsuario: string;

  constructor(
    public authservice: AuthService
  ) { }

  ngOnInit() {
    this.authservice.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.email = auth.email;
        this.fotoUsuario = auth.photoURL;
      }else{
        this.isLogin = false;
      }
    })
  }

  onClickLogout() {
    this.authservice.logout();
  }

}
