import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { Course } from '../../course';

@Component({
  selector:    'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls:   ['./course-form.component.scss']
})
export class CourseFormComponent extends FormComponent<Course> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(Course, shell, activeRoute);
  }
}
