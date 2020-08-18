import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { School } from '../../school';

@Component({
  selector:    'app-school-list-page',
  templateUrl: './school-list.page.component.html',
  styleUrls:   ['./school-list.page.component.scss']
})
export class SchoolListPageComponent extends ListComponent<School> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(School, shell, activatedRoute);
  }

  triggerSchoolAdd() {
    this.shell.triggerUseCase(School, 'add');
  }
}
