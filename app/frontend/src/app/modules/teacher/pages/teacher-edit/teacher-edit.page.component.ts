import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';
import { TeacherFormComponent } from '../../components/teacher-form/teacher-form.component';

@Component({
  selector:    'app-teacher-edit-page',
  templateUrl: './teacher-edit.page.component.html',
  styleUrls:   ['./teacher-edit.page.component.scss']
})
export class TeacherEditPageComponent extends DetailsComponent<Teacher> {
  @ViewChild(TeacherFormComponent, { static: false })
  public entityForm: TeacherFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Teacher, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(Teacher, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
