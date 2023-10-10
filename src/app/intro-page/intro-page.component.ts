import { Component } from '@angular/core';
import {LoginLogoutProcessingComponent} from "../singletones/login-logout-processing/login-logout-processing.component";

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent {
  showElement$ = this.visibilityService.showElement$;

  constructor(private visibilityService: LoginLogoutProcessingComponent) {}

  toggleVisibility() {
    this.visibilityService.toggleVisibility();
  }

}
