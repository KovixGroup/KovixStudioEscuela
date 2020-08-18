import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { Student } from '../../student';
import { StudentFormComponent } from '../../components/student-form/student-form.component';

@Component({
  selector:    'app-student-edit-page',
  templateUrl: './student-edit.page.component.html',
  styleUrls:   ['./student-edit.page.component.scss']
})
export class StudentEditPageComponent extends DetailsComponent<Student> {
  @ViewChild(StudentFormComponent, { static: false })
  public entityForm: StudentFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Student, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(Student, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
