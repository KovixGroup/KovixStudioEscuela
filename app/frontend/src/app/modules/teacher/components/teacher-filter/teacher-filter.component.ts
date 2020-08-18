import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-filter',
  templateUrl: './teacher-filter.component.html',
  styleUrls:   ['./teacher-filter.component.scss']
})
export class TeacherFilterComponent extends AttributeFilterComponent<Teacher> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(Teacher, shell, activeRoute);
  }
}
