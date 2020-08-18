import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { School } from '../../school';
import { SchoolFormComponent } from '../../components/school-form/school-form.component';

@Component({
  selector:    'app-school-add-page',
  templateUrl: './school-add.page.component.html',
  styleUrls:   ['./school-add.page.component.scss']
})
export class SchoolAddPageComponent {
  @ViewChild(SchoolFormComponent, { static: false })
  public entityForm: SchoolFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(School, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
