import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { Course } from '../../course';
import { CourseFormComponent } from '../../components/course-form/course-form.component';

@Component({
  selector:    'app-course-edit-page',
  templateUrl: './course-edit.page.component.html',
  styleUrls:   ['./course-edit.page.component.scss']
})
export class CourseEditPageComponent extends DetailsComponent<Course> {
  @ViewChild(CourseFormComponent, { static: false })
  public entityForm: CourseFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Course, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(Course, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
