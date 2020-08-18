import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent, Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-list-page',
  templateUrl: './school-class-list.page.component.html',
  styleUrls:   ['./school-class-list.page.component.scss']
})
export class SchoolClassListPageComponent extends ListComponent<SchoolClass> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(SchoolClass, shell, activatedRoute);
  }

  triggerSchoolClassAdd() {
    this.shell.triggerUseCase(SchoolClass, 'add');
  }
}
