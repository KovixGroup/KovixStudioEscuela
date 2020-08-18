import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { Shell, SkfAuthenticationProvider } from '@skyframe/angular';
import { User } from '../../../modules/user/user';

@Component({
  selector:        'app-user-avatar-layout',
  templateUrl:     './user-avatar.component.html',
  styleUrls:       ['./user-avatar.component.scss'],
  encapsulation:   ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAvatarComponent {
  @Input()
  public showAvatar: boolean;

  public user: User;

  constructor(
    private shell: Shell,
    private _changeDetectorRef: ChangeDetectorRef,
    private authProvider: SkfAuthenticationProvider,
    private _router: Router
  ) {
    // Set the defaults
    this.showAvatar = true;
    this.user = this.authProvider.getUser(User).getValue() as User;
  }

  /**
   * Sign out
   */
  signOut(): Promise<boolean> {
    return this.shell.triggerRootUseCase('sign-out');
  }
}
