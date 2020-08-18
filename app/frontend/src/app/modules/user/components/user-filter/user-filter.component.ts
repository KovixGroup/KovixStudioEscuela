import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { User } from '../../user';

@Component({
  selector:    'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls:   ['./user-filter.component.scss']
})
export class UserFilterComponent extends AttributeFilterComponent<User> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(User, shell, activeRoute);
  }
}
