import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolFormComponent } from '../../components/school-form/school-form.component';

@Component({
  selector:    'app-school-edit-popup',
  templateUrl: './school-edit-popup.component.html',
  styleUrls:   ['./school-edit-popup.component.scss']
})
export class SchoolEditPopupComponent {
@ViewChild(SchoolFormComponent, { static: false })
public editForm: SchoolFormComponent;

  constructor(
    private dialogRef: MatDialogRef<SchoolEditPopupComponent>,
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
