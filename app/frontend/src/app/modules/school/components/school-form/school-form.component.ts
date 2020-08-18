import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent, Shell } from '@skyframe/angular';
import { School } from '../../school';

@Component({
  selector:    'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls:   ['./school-form.component.scss']
})
export class SchoolFormComponent extends FormComponent<School> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(School, shell, activeRoute);
  }
}
