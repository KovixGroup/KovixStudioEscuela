import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { SchoolClass } from "../../../school-class/school-class";
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls:   ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent extends DetailsComponent<Teacher> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Teacher, shell, activatedRoute);
  }

  public goToSchoolClassDetail(id: number): Promise<boolean> {
    return this.shell.triggerUseCase(SchoolClass, 'detail', [id]);
  }
}
