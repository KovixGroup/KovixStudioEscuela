import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';
import { TeacherFormComponent } from '../../components/teacher-form/teacher-form.component';

@Component({
  selector:    'app-teacher-add-page',
  templateUrl: './teacher-add.page.component.html',
  styleUrls:   ['./teacher-add.page.component.scss']
})
export class TeacherAddPageComponent {
  @ViewChild(TeacherFormComponent, { static: false })
  public entityForm: TeacherFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(Teacher, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
