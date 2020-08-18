import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { User } from '../../user';

@Component({
  selector:    'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls:   ['./user-form.component.scss']
})
export class UserFormComponent extends FormComponent<User> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(User, shell, activeRoute);
  }
}
