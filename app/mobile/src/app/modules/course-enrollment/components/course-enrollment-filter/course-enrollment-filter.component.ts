import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-filter',
  templateUrl: './course-enrollment-filter.component.html',
  styleUrls:   ['./course-enrollment-filter.component.scss']
})
export class CourseEnrollmentFilterComponent extends AttributeFilterComponent<CourseEnrollment> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(CourseEnrollment, shell, activeRoute);
  }
}
