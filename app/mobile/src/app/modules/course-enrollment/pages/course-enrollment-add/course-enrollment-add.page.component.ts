import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';
import { CourseEnrollmentFormComponent } from '../../components/course-enrollment-form/course-enrollment-form.component';

@Component({
  selector:    'app-course-enrollment-add-page',
  templateUrl: './course-enrollment-add.page.component.html',
  styleUrls:   ['./course-enrollment-add.page.component.scss']
})
export class CourseEnrollmentAddPageComponent {
  @ViewChild(CourseEnrollmentFormComponent, { static: false })
  public entityForm: CourseEnrollmentFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(CourseEnrollment, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
