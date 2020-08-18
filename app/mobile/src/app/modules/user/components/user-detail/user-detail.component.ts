import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';

import { User } from '../../user';

@Component({
  selector:    'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls:   ['./user-detail.component.scss']
})
export class UserDetailComponent extends DetailsComponent<User> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(User, shell, activatedRoute);
  }

  
}
