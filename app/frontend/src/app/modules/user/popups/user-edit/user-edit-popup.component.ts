import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector:    'app-user-edit-popup',
  templateUrl: './user-edit-popup.component.html',
  styleUrls:   ['./user-edit-popup.component.scss']
})
export class UserEditPopupComponent {
@ViewChild(UserFormComponent, { static: false })
public editForm: UserFormComponent;

  constructor(
    private dialogRef: MatDialogRef<UserEditPopupComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {}

public submitForm() {
    this.editForm.submit().subscribe(() => {
      this.dialogRef.close(this.editForm.entity);
    });
  }

public cancelEdition() {
    this.dialogRef.close();
  }
}
