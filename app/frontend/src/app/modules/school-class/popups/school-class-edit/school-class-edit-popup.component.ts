import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolClassFormComponent } from '../../components/school-class-form/school-class-form.component';

@Component({
  selector:    'app-school-class-edit-popup',
  templateUrl: './school-class-edit-popup.component.html',
  styleUrls:   ['./school-class-edit-popup.component.scss']
})
export class SchoolClassEditPopupComponent {
@ViewChild(SchoolClassFormComponent, { static: false })
public editForm: SchoolClassFormComponent;

  constructor(
    private dialogRef: MatDialogRef<SchoolClassEditPopupComponent>,
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
