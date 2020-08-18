import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { Shell } from '@skyframe/angular';
import { User } from '../../user';

@Component({
  selector:    'app-user-add-popup',
  templateUrl: './user-add-popup.component.html',
  styleUrls:   ['./user-add-popup.component.scss']
})
export class UserAddPopupComponent {
@ViewChild(UserFormComponent, { static: false })
public addForm: UserFormComponent;

public entity: User;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<UserAddPopupComponent>
) {
    this.entity = shell.createEntity(User, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
