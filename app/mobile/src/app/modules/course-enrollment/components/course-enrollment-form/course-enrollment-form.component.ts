import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-form',
  templateUrl: './course-enrollment-form.component.html',
  styleUrls:   ['./course-enrollment-form.component.scss']
})
export class CourseEnrollmentFormComponent extends FormComponent<CourseEnrollment> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(CourseEnrollment, shell, activeRoute);
  }
}
