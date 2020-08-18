import { Component } from '@angular/core';
import { Shell, SkfAuthenticationProvider } from '@skyframe/angular';

@Component({
  selector: 'app-authentication-actions',
  templateUrl: './authentication-actions.component.html',
  styleUrls: ['./authentication-actions.component.css']
})
export class AuthenticationActionsComponent {
  constructor(
    private authenticationProvider: SkfAuthenticationProvider,
    private shell: Shell
  ) {}

  get isAuthenticated() {
    return this.authenticationProvider.isAuthenticated();
  }

  logout() {
    this.authenticationProvider.logout();
    this.shell.triggerRootUseCase('login');
  }
}
