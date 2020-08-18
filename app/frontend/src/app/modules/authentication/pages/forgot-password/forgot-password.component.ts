import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkfAuthenticationProvider } from '@skyframe/angular';
import { TreoAnimations } from '../../../../../@treo/animations';

@Component({
  selector:      'auth-forgot-password',
  templateUrl:   './forgot-password.component.html',
  styleUrls:     ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:    TreoAnimations
})
export class AuthForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  message: any;

  constructor(
    private authenticationProvider: SkfAuthenticationProvider,
    private changeDetector: ChangeDetectorRef,
    private _formBuilder: FormBuilder
  ) {
    this.message = null;
  }

  ngOnInit(): void {
    // Create the form
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * Send the reset link
   */
  async sendResetLink(): Promise<void> {
    // Do nothing if the form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    // Disable the form
    this.forgotPasswordForm.disable();

    // Hide the message
    this.message = null;

    try {
      // Request reset token
      await this.authenticationProvider
        .requestPasswordReset(this.forgotPasswordForm.value)
        .toPromise();

      // Reset the form
      this.forgotPasswordForm.reset({});

      // Show the message
      this.message = {
        appearance: 'outline',
        content:
          "Password reset sent! You'll receive an email if you are registered on our system.",
        shake:    false,
        showIcon: false,
        type:     'success'
      };
    } catch (err) {
      // Show the error message
      this.message = {
        appearance: 'outline',
        content:    err.message,
        shake:      true,
        showIcon:   false,
        type:       'error'
      };
    } finally {
      // Re-enable the form
      this.forgotPasswordForm.enable();

      // Detect changes
      this.changeDetector.detectChanges();
    }
  }
}
