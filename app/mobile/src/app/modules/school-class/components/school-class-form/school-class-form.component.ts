import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-form',
  templateUrl: './school-class-form.component.html',
  styleUrls:   ['./school-class-form.component.scss']
})
export class SchoolClassFormComponent extends FormComponent<SchoolClass> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(SchoolClass, shell, activeRoute);
  }
}
