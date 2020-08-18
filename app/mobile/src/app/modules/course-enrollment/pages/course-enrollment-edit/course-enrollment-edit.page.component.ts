import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';
import { CourseEnrollmentFormComponent } from '../../components/course-enrollment-form/course-enrollment-form.component';

@Component({
  selector:    'app-course-enrollment-edit-page',
  templateUrl: './course-enrollment-edit.page.component.html',
  styleUrls:   ['./course-enrollment-edit.page.component.scss']
})
export class CourseEnrollmentEditPageComponent extends DetailsComponent<CourseEnrollment> {
  @ViewChild(CourseEnrollmentFormComponent, { static: false })
  public entityForm: CourseEnrollmentFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(CourseEnrollment, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(CourseEnrollment, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
