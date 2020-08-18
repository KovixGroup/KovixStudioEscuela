import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { Course } from '../../course';
import { CourseFormComponent } from '../../components/course-form/course-form.component';

@Component({
  selector:    'app-course-add-page',
  templateUrl: './course-add.page.component.html',
  styleUrls:   ['./course-add.page.component.scss']
})
export class CourseAddPageComponent {
  @ViewChild(CourseFormComponent, { static: false })
  public entityForm: CourseFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(Course, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
