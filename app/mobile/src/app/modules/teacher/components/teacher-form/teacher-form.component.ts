import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls:   ['./teacher-form.component.scss']
})
export class TeacherFormComponent extends FormComponent<Teacher> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(Teacher, shell, activeRoute);
  }
}
