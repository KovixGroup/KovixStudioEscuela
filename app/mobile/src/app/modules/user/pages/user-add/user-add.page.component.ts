import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { User } from '../../user';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector:    'app-user-add-page',
  templateUrl: './user-add.page.component.html',
  styleUrls:   ['./user-add.page.component.scss']
})
export class UserAddPageComponent {
  @ViewChild(UserFormComponent, { static: false })
  public entityForm: UserFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(User, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
