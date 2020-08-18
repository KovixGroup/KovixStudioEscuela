import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-filter',
  templateUrl: './school-class-filter.component.html',
  styleUrls:   ['./school-class-filter.component.scss']
})
export class SchoolClassFilterComponent extends AttributeFilterComponent<SchoolClass> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(SchoolClass, shell, activeRoute);
  }
}
