import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SkfAuthenticationProvider, Shell } from '@skyframe/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: SkfAuthenticationProvider, private shell: Shell) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.shell.triggerRootUseCase('sign-in');
      return false;
    }
  }
}
