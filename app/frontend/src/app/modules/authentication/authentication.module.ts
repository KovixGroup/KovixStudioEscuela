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
import { TreoCardModule } from '../../../@treo/components/card/card.module';
import { TreoMessageModule } from '../../../@treo/components/message/message.module';
import { FilesModule } from '../file/files.module';
import { AuthConfirmationRequiredComponent } from './pages/confirmation-required/confirmation-required.component';
import { AuthForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthSignOutComponent } from './pages/sign-out/sign-out.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthForgotPasswordComponent,
    AuthConfirmationRequiredComponent,
    AuthResetPasswordComponent,
    AuthSignOutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FilesModule,
    LaddaModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    TreoCardModule,
    TreoMessageModule
  ]
})
export class AuthenticationModule {
  constructor(private shell: Shell) {
    this.shell.registerRootUseCase('login', '/auth/login', LoginComponent);
    this.shell.registerRootUseCase('sign-up', '/auth/sign-up', SignupComponent);
    this.shell.registerRootUseCase(
      'sign-out',
      '/auth/sign-out',
      AuthSignOutComponent
    );
    this.shell.registerRootUseCase(
      'forgot-password',
      '/auth/forgot-password',
      AuthForgotPasswordComponent
    );
    this.shell.registerRootUseCase(
      'reset-password',
      '/auth/reset-password',
      AuthResetPasswordComponent
    );
  }
}
