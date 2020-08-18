import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication.module';
import { AuthConfirmationRequiredComponent } from './pages/confirmation-required/confirmation-required.component';
import { AuthForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthSignOutComponent } from './pages/sign-out/sign-out.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path:      'login',
    component: LoginComponent
  },
  {
    path:      'sign-up',
    component: SignupComponent
  },
  {
    path:      'sign-out',
    component: AuthSignOutComponent
  },
  {
    path:      'confirmation-required',
    component: AuthConfirmationRequiredComponent
  },
  {
    path:      'forgot-password',
    component: AuthForgotPasswordComponent
  },
  {
    path:      'reset-password',
    component: AuthResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthenticationModule],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
