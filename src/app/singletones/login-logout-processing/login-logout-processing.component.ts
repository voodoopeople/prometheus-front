import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginLogoutProcessingComponent {
  private _showElement = new BehaviorSubject<boolean>(false);
  readonly showElement$ = this._showElement.asObservable();

  toggleVisibility() {
    this._showElement.next(!this._showElement.value);
  }
}
