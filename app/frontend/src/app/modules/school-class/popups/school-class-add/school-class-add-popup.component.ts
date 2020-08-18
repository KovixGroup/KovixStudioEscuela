import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SchoolClassFormComponent } from '../../components/school-class-form/school-class-form.component';
import { Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-add-popup',
  templateUrl: './school-class-add-popup.component.html',
  styleUrls:   ['./school-class-add-popup.component.scss']
})
export class SchoolClassAddPopupComponent {
@ViewChild(SchoolClassFormComponent, { static: false })
public addForm: SchoolClassFormComponent;

public entity: SchoolClass;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<SchoolClassAddPopupComponent>
) {
    this.entity = shell.createEntity(SchoolClass, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
