import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { School } from '../../school';
import { SchoolFormComponent } from '../../components/school-form/school-form.component';

@Component({
  selector:    'app-school-edit-page',
  templateUrl: './school-edit.page.component.html',
  styleUrls:   ['./school-edit.page.component.scss']
})
export class SchoolEditPageComponent extends DetailsComponent<School> {
  @ViewChild(SchoolFormComponent, { static: false })
  public entityForm: SchoolFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(School, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(School, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
