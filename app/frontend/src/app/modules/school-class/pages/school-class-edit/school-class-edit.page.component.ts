import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';
import { SchoolClassFormComponent } from '../../components/school-class-form/school-class-form.component';

@Component({
  selector:    'app-school-class-edit-page',
  templateUrl: './school-class-edit.page.component.html',
  styleUrls:   ['./school-class-edit.page.component.scss']
})
export class SchoolClassEditPageComponent extends DetailsComponent<SchoolClass> {
  @ViewChild(SchoolClassFormComponent, { static: false })
  public entityForm: SchoolClassFormComponent;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(SchoolClass, shell, activatedRoute);
  }

  navigateToDetailPage(): Promise<boolean> {
    return this.shell.triggerUseCase(SchoolClass, 'detail', [
      this.state.getValue().entityId
    ]);
  }

  submitForm() {
    this.entityForm.submit().subscribe(() =>
      this.navigateToDetailPage()
    );
  }
}
