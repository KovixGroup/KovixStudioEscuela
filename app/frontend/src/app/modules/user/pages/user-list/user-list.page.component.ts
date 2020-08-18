import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { User } from '../../user';

@Component({
  selector:    'app-user-list-page',
  templateUrl: './user-list.page.component.html',
  styleUrls:   ['./user-list.page.component.scss']
})
export class UserListPageComponent extends ListComponent<User> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(User, shell, activatedRoute);
  }

  triggerUserAdd() {
    this.shell.triggerUseCase(User, 'add');
  }
}
