import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';

import { School } from '../../school';

@Component({
  selector:    'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls:   ['./school-detail.component.scss']
})
export class SchoolDetailComponent extends DetailsComponent<School> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(School, shell, activatedRoute);
  }

  
}
