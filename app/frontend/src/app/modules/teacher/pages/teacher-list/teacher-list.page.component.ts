import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-list-page',
  templateUrl: './teacher-list.page.component.html',
  styleUrls:   ['./teacher-list.page.component.scss']
})
export class TeacherListPageComponent extends ListComponent<Teacher> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Teacher, shell, activatedRoute);
  }

  triggerTeacherAdd() {
    this.shell.triggerUseCase(Teacher, 'add');
  }
}
