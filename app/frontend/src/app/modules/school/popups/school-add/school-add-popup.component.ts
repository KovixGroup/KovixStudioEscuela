import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SchoolFormComponent } from '../../components/school-form/school-form.component';
import { Shell } from '@skyframe/angular';
import { School } from '../../school';

@Component({
  selector:    'app-school-add-popup',
  templateUrl: './school-add-popup.component.html',
  styleUrls:   ['./school-add-popup.component.scss']
})
export class SchoolAddPopupComponent {
@ViewChild(SchoolFormComponent, { static: false })
public addForm: SchoolFormComponent;

public entity: School;

  constructor(
    private shell: Shell,
    private dialogRef: MatDialogRef<SchoolAddPopupComponent>
) {
    this.entity = shell.createEntity(School, {} as any);
  }

public submitForm() {
    this.addForm.submit().subscribe(() => {
      this.dialogRef.close(this.addForm.formGroup.value);
    });
  }
}
