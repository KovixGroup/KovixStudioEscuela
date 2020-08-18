import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { Student } from '../../student';

@Component({
  selector:    'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls:   ['./student-form.component.scss']
})
export class StudentFormComponent extends FormComponent<Student> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(Student, shell, activeRoute);
  }
}
