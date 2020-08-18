import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentFormComponent } from '../../components/student-form/student-form.component';

@Component({
  selector:    'app-student-edit-popup',
  templateUrl: './student-edit-popup.component.html',
  styleUrls:   ['./student-edit-popup.component.scss']
})
export class StudentEditPopupComponent {
@ViewChild(StudentFormComponent, { static: false })
public editForm: StudentFormComponent;

  constructor(
    private dialogRef: MatDialogRef<StudentEditPopupComponent>,
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
