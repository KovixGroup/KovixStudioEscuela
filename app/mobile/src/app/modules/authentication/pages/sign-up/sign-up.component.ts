import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shell, SkfAuthenticationProvider } from '@skyframe/angular';
import { User } from '../../../user/user';

@Component({
  selector:      'app-signup',
  templateUrl:   './sign-up.component.html',
  styleUrls:     ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent {
  public message: any;

  public signUpForm: FormGroup;

  constructor(
    private shell: Shell,
    private authenticationProvider: SkfAuthenticationProvider,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async signUp() {
    if (!this.signUpForm.valid) {
      return;
    }

    // Disable the form
    this.signUpForm.disable();

    // Hide the message
    this.message = null;

    const userInstance = this.shell.createEntity(User, this.signUpForm.value);

    try {
      await this.authenticationProvider.signup(userInstance).toPromise();
      this.message = {
        appearance: 'outline',
        content:
          'Your account has been created and a confirmation mail has been sent to your email address.',
        shake:    false,
        showIcon: false,
        type:     'success'
      };
    } catch (e) {
      this.message = {
        appearance: 'outline',
        content:    e.message,
        shake:      true,
        showIcon:   false,
        type:       'error'
      };
    } finally {
      this.signUpForm.enable();
      this.signUpForm.reset({});
    }
  }
}
