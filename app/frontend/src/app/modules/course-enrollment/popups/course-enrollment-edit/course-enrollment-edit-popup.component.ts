import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseEnrollmentFormComponent } from '../../components/course-enrollment-form/course-enrollment-form.component';

@Component({
  selector:    'app-course-enrollment-edit-popup',
  templateUrl: './course-enrollment-edit-popup.component.html',
  styleUrls:   ['./course-enrollment-edit-popup.component.scss']
})
export class CourseEnrollmentEditPopupComponent {
@ViewChild(CourseEnrollmentFormComponent, { static: false })
public editForm: CourseEnrollmentFormComponent;

  constructor(
    private dialogRef: MatDialogRef<CourseEnrollmentEditPopupComponent>,
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
