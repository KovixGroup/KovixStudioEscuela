import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { Student } from '../../student';

@Component({
  selector:    'app-student-list-page',
  templateUrl: './student-list.page.component.html',
  styleUrls:   ['./student-list.page.component.scss']
})
export class StudentListPageComponent extends ListComponent<Student> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Student, shell, activatedRoute);
  }

  triggerStudentAdd() {
    this.shell.triggerUseCase(Student, 'add');
  }
}
