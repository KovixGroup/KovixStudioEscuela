import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { Course } from '../../course';

@Component({
  selector:    'app-course-list-page',
  templateUrl: './course-list.page.component.html',
  styleUrls:   ['./course-list.page.component.scss']
})
export class CourseListPageComponent extends ListComponent<Course> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Course, shell, activatedRoute);
  }

  triggerCourseAdd() {
    this.shell.triggerUseCase(Course, 'add');
  }
}
