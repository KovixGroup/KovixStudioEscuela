import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';

import { Student } from '../../student';

@Component({
  selector:    'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls:   ['./student-detail.component.scss']
})
export class StudentDetailComponent extends DetailsComponent<Student> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Student, shell, activatedRoute);
  }

  
}
