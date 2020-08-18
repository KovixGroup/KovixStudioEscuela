import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttributeFilterComponent, Shell } from '@skyframe/angular';
import { School } from '../../school';

@Component({
  selector:    'app-school-filter',
  templateUrl: './school-filter.component.html',
  styleUrls:   ['./school-filter.component.scss']
})
export class SchoolFilterComponent extends AttributeFilterComponent<School> {
  constructor(shell: Shell, activeRoute: ActivatedRoute) {
    super(School, shell, activeRoute);
  }
}
