import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentFormComponent } from '../../components/student-form/student-form.component';
import { Shell } from '@skyframe/angular';
import { Student } from '../../student';

@Component({
  selector:    'app-student-add-popup',
  templateUrl: './student-add-popup.component.html',
  styleUrls:   ['./student-add-popup.component.scss']
})
export class StudentAddPopupComponent {
@ViewChild(StudentFormComponent, { static: false })
public addForm: StudentFormComponent;

public entity: Student;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<StudentAddPopupComponent>
) {
    this.entity = shell.createEntity(Student, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
