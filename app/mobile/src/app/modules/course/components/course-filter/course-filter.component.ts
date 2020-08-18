import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { Course } from '../../course';

@Component({
  selector:    'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls:   ['./course-filter.component.scss']
})
export class CourseFilterComponent extends AttributeFilterComponent<Course> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(Course, shell, activeRoute);
  }
}
