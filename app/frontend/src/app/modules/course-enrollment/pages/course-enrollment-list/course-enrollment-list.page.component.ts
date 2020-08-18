import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-list-page',
  templateUrl: './course-enrollment-list.page.component.html',
  styleUrls:   ['./course-enrollment-list.page.component.scss']
})
export class CourseEnrollmentListPageComponent extends ListComponent<CourseEnrollment> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(CourseEnrollment, shell, activatedRoute);
  }

  triggerCourseEnrollmentAdd() {
    this.shell.triggerUseCase(CourseEnrollment, 'add');
  }
}
