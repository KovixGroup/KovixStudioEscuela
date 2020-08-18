import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeacherFormComponent } from '../../components/teacher-form/teacher-form.component';

@Component({
  selector:    'app-teacher-edit-popup',
  templateUrl: './teacher-edit-popup.component.html',
  styleUrls:   ['./teacher-edit-popup.component.scss']
})
export class TeacherEditPopupComponent {
@ViewChild(TeacherFormComponent, { static: false })
public editForm: TeacherFormComponent;

  constructor(
    private dialogRef: MatDialogRef<TeacherEditPopupComponent>,
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
