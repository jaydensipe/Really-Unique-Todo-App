import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardAuthenticationService {

  constructor(private router: Router) { }

  authenticate(username: string, password: string) {
    if (username === "test" && password === "test") {
      sessionStorage.setItem("user", username);
      return true;
    }

    return false;
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem("user")) {
      return true;
    }

    return false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl("login");
  }
}
