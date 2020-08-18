import { Component, ViewChild } from '@angular/core';
import { Shell } from '@skyframe/angular';
import { Student } from '../../student';
import { StudentFormComponent } from '../../components/student-form/student-form.component';

@Component({
  selector:    'app-student-add-page',
  templateUrl: './student-add.page.component.html',
  styleUrls:   ['./student-add.page.component.scss']
})
export class StudentAddPageComponent {
  @ViewChild(StudentFormComponent, { static: false })
  public entityForm: StudentFormComponent;

  constructor(private shell: Shell) {}

  navigateToListPage(): Promise<boolean> {
    return this.shell.triggerUseCase(Student, 'list');
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToListPage()
    );
  }
}
