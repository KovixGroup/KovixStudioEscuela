import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CourseFormComponent } from '../../components/course-form/course-form.component';
import { Shell } from '@skyframe/angular';
import { Course } from '../../course';

@Component({
  selector:    'app-course-add-popup',
  templateUrl: './course-add-popup.component.html',
  styleUrls:   ['./course-add-popup.component.scss']
})
export class CourseAddPopupComponent {
@ViewChild(CourseFormComponent, { static: false })
public addForm: CourseFormComponent;

public entity: Course;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<CourseAddPopupComponent>
) {
    this.entity = shell.createEntity(Course, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
