import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthenticationService } from '../_services/hard-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(private router: Router, private auth: HardAuthenticationService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigateByUrl('welcome/' + this.username);

    }
  }

}
