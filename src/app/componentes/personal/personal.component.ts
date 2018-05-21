import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  public nombreUsuario: string;
  public isLogin: boolean;

  constructor(
    public authservice: AuthService
  ) { }

  ngOnInit() {
    this.authservice.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
      }else{
        this.isLogin = false;
      }
    })
  }

}
