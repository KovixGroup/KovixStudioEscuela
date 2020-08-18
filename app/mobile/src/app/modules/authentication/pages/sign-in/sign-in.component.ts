import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  LegacyFormComponent,
  Shell,
  SkfAuthenticationProvider
} from '@skyframe/angular';
import { User } from '../../../user/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent extends LegacyFormComponent<User> {
  message: any;

  constructor(
    private authenticationProvider: SkfAuthenticationProvider,
    private shell: Shell,
    private changeDetector: ChangeDetectorRef
  ) {
    super();
    this.entity = this.shell.createEntity(User, {});
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      rememberMe: new FormControl(false)
    });
  }

  async login() {
    // Disable the form
    this.formGroup.disable();

    // Hide the message
    this.message = null;

    const user: User = this.formGroup.value;

    const userInstance = this.shell.createEntity(User, user);

    try {
      await this.authenticationProvider.login(userInstance).toPromise();
      this.shell.triggerRootUseCase('root');
    } catch (err) {
      // Re-enable the form
      this.formGroup.enable();

      // Show the error message
      this.message = {
        appearance: 'outline',
        content: err.message,
        shake: true,
        showIcon: false,
        type: 'error'
      };
      this.changeDetector.detectChanges();
    }
  }
}
