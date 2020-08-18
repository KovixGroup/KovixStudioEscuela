import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseFormComponent } from '../../components/course-form/course-form.component';

@Component({
  selector:    'app-course-edit-popup',
  templateUrl: './course-edit-popup.component.html',
  styleUrls:   ['./course-edit-popup.component.scss']
})
export class CourseEditPopupComponent {
@ViewChild(CourseFormComponent, { static: false })
public editForm: CourseFormComponent;

  constructor(
    private dialogRef: MatDialogRef<CourseEditPopupComponent>,
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
