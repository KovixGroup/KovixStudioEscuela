import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { Student } from '../../student';

@Component({
  selector:    'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls:   ['./student-filter.component.scss']
})
export class StudentFilterComponent extends AttributeFilterComponent<Student> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(Student, shell, activeRoute);
  }
}
