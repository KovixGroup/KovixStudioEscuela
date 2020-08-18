import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';
import { SchoolClassFormComponent } from '../../components/school-class-form/school-class-form.component';

@Component({
  selector:    'app-school-class-add-page',
  templateUrl: './school-class-add.page.component.html',
  styleUrls:   ['./school-class-add.page.component.scss']
})
export class SchoolClassAddPageComponent {
  @ViewChild(SchoolClassFormComponent, { static: false })
  public entityForm: SchoolClassFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(SchoolClass, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
