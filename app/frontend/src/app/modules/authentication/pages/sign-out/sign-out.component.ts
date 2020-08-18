import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Shell, SkfAuthenticationProvider } from '@skyframe/angular';
import { interval, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector:      'auth-sign-out',
  templateUrl:   './sign-out.component.html',
  styleUrls:     ['./sign-out.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthSignOutComponent implements OnInit, OnDestroy {
  public countdown: number;

  public countdownMapping: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private shell: Shell,
    private authenticationProvider: SkfAuthenticationProvider,
    private _router: Router
  ) {
    // Set the private default
    this._unsubscribeAll = new Subject();

    // Set the defaults
    this.countdown = 5;
    this.countdownMapping = {
      '=1':  '# second',
      other: '# seconds'
    };
  }

  ngOnInit(): void {
    // Sign out
    this.authenticationProvider.logout().toPromise();

    // Get the duration
    const duration = this.countdown;

    // Redirect after the countdown
    interval(1000)
      .pipe(take(duration), takeUntil(this._unsubscribeAll))
      .subscribe(
        () => {
          this.countdown--;
        },
        () => {},
        () => {
          this.shell.triggerRootUseCase('login');
        }
      );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
