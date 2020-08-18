import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import { Course } from "../../../course/course";
import { Teacher } from "../../../teacher/teacher";
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-detail',
  templateUrl: './school-class-detail.component.html',
  styleUrls:   ['./school-class-detail.component.scss']
})
export class SchoolClassDetailComponent extends DetailsComponent<SchoolClass> {

  @Input()
  public title: string;

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(SchoolClass, shell, activatedRoute);
  }

  public goToCourseDetail(id: number): Promise<boolean> {
    return this.shell.triggerUseCase(Course, 'detail', [id]);
  }

public goToTeacherDetail(id: number): Promise<boolean> {
    return this.shell.triggerUseCase(Teacher, 'detail', [id]);
  }
}
