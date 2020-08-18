import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { Shell } from '@skyframe/angular';
import { LaddaModule } from 'angular2-ladda';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports:      [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class AuthenticationModule {
  constructor(private shell: Shell) {
    this.shell.registerRootUseCase('sign-in', '/auth/sign-in', SignInComponent);
    this.shell.registerRootUseCase('sign-up', '/auth/sign-up', SignUpComponent);
  }
}
