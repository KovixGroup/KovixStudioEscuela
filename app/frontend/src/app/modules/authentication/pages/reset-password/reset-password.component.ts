import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Shell, SkfAuthenticationProvider } from '@skyframe/angular';
import { TreoAnimations } from '../../../../../@treo/animations';
import { TreoValidators } from '../../../../../@treo/validators';

@Component({
  selector:      'auth-reset-password',
  templateUrl:   './reset-password.component.html',
  styleUrls:     ['./reset-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:    TreoAnimations
})
export class AuthResetPasswordComponent implements OnInit {
  public message: any;

  public resetPasswordForm: FormGroup;

  public token: string;

  constructor(
    private shell: Shell,
    private authenticationProvider: SkfAuthenticationProvider,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.token = route.snapshot.queryParams.token;

    if (!this.token) {
      this.shell.triggerRootUseCase('forgot-password');
    }

    // Set the defaults
    this.message = null;
  }

  ngOnInit(): void {
    // Create the form
    this.resetPasswordForm = this._formBuilder.group(
      {
        password:        ['', Validators.required],
        passwordConfirm: ['', Validators.required]
      },
      {
        validators: TreoValidators.mustMatch('password', 'passwordConfirm')
      }
    );
  }

  /**
   * Reset password
   */
  async resetPassword(): Promise<void> {
    // Do nothing if the form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }

    // Disable the form
    this.resetPasswordForm.disable();

    // Hide the message
    this.message = null;

    try {
      const { value } = this.resetPasswordForm.get('password');

      // Reset password
      await this.authenticationProvider.changePassword(value, this.token);

      // Reset the form
      this.resetPasswordForm.reset({});

      // Show the message
      this.message = {
        appearance: 'outline',
        content:    'Your password has been reset.',
        shake:      false,
        showIcon:   false,
        type:       'success'
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
      this.resetPasswordForm.enable();

      // Detect changes
      this.changeDetector.detectChanges();
    }
  }
}
