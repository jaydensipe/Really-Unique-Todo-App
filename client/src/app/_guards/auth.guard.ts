import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HardAuthenticationService } from '../_services/hard-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: HardAuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isUserLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl("login");
    return false;

  }

}
