import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { User } from '../../user';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector:    'app-user-edit-page',
  templateUrl: './user-edit.page.component.html',
  styleUrls:   ['./user-edit.page.component.scss']
})
export class UserEditPageComponent extends DetailsComponent<User> {
  @ViewChild(UserFormComponent, { static: false })
  public entityForm: UserFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(User, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(User, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
