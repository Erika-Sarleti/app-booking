import { Injectable } from '@angular/core';
import {  CanActivate, Router,} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService,
    private router: Router){}

  canActivate(){
    const isAuth = this.service.isLogged();
    if (!isAuth) {
      this.router.navigateByUrl('login');
    }
    return isAuth;
  }
}
