import { Component, OnInit } from '@angular/core';
import { HardAuthenticationService } from '../_services/hard-authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: HardAuthenticationService) { }

  ngOnInit(): void {
  }

}
