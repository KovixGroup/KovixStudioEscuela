import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CourseEnrollmentFormComponent } from '../../components/course-enrollment-form/course-enrollment-form.component';
import { Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-add-popup',
  templateUrl: './course-enrollment-add-popup.component.html',
  styleUrls:   ['./course-enrollment-add-popup.component.scss']
})
export class CourseEnrollmentAddPopupComponent {
@ViewChild(CourseEnrollmentFormComponent, { static: false })
public addForm: CourseEnrollmentFormComponent;

public entity: CourseEnrollment;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<CourseEnrollmentAddPopupComponent>
) {
    this.entity = shell.createEntity(CourseEnrollment, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
