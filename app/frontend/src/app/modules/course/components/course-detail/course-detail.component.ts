import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';

import { Course } from '../../course';

@Component({
  selector:    'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls:   ['./course-detail.component.scss']
})
export class CourseDetailComponent extends DetailsComponent<Course> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Course, shell, activatedRoute);
  }

  
}
