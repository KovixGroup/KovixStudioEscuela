import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { Course } from "../../../course/course";
import { Student } from "../../../student/student";
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-detail',
  templateUrl: './course-enrollment-detail.component.html',
  styleUrls:   ['./course-enrollment-detail.component.scss']
})
export class CourseEnrollmentDetailComponent extends DetailsComponent<CourseEnrollment> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(CourseEnrollment, shell, activatedRoute);
  }

  public goToCourseDetail(id: number): Promise<boolean> {
    return this.shell.triggerUseCase(Course, 'detail', [id]);
  }

public goToStudentDetail(id: number): Promise<boolean> {
    return this.shell.triggerUseCase(Student, 'detail', [id]);
  }
}
