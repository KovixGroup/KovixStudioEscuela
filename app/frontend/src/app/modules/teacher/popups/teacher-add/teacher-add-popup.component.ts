import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TeacherFormComponent } from '../../components/teacher-form/teacher-form.component';
import { Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-add-popup',
  templateUrl: './teacher-add-popup.component.html',
  styleUrls:   ['./teacher-add-popup.component.scss']
})
export class TeacherAddPopupComponent {
@ViewChild(TeacherFormComponent, { static: false })
public addForm: TeacherFormComponent;

public entity: Teacher;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<TeacherAddPopupComponent>
) {
    this.entity = shell.createEntity(Teacher, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
