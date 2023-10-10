import { Component } from '@angular/core';
import {LoginLogoutProcessingComponent} from "./singletones/login-logout-processing/login-logout-processing.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prometheus';

  showElement$ = this.visibilityService.showElement$;

  constructor(private visibilityService: LoginLogoutProcessingComponent) {}

  toggleVisibility() {
    this.visibilityService.toggleVisibility();
  }
}
