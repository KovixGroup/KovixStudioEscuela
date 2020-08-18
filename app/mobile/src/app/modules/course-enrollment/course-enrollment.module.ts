import {
  CoreModule,
  ListModule,
  Shell,
  SkfModule,
  SkyframeModule,
  ExportCsvModule,
  StatusModule,
  FilterModule,
  DateRangeModule
} from '@skyframe/angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LaddaModule } from 'angular2-ladda';
import { CourseEnrollment } from './course-enrollment';
import { CourseEnrollmentAddPageComponent } from './pages/course-enrollment-add/course-enrollment-add.page.component';
import { CourseEnrollmentDetailComponent } from './components/course-enrollment-detail/course-enrollment-detail.component';
import { CourseEnrollmentAutocompleteComponent } from './components/course-enrollment-autocomplete/course-enrollment-autocomplete.component';
import { CourseEnrollmentDetailPageComponent } from './pages/course-enrollment-detail/course-enrollment-detail.page.component';
import { CourseEnrollmentEditPageComponent } from './pages/course-enrollment-edit/course-enrollment-edit.page.component';
import { CourseEnrollmentFormComponent } from './components/course-enrollment-form/course-enrollment-form.component';
import { CourseEnrollmentListComponent } from './components/course-enrollment-list/course-enrollment-list.component';
import { CourseEnrollmentFilterComponent } from './components/course-enrollment-filter/course-enrollment-filter.component';
import { CourseEnrollmentListPageComponent } from './pages/course-enrollment-list/course-enrollment-list.page.component';
import { CourseEnrollmentLayoutComponent } from './layout/course-enrollment.layout.component';
import { CourseModule } from '../course/course.module';
import { StudentModule } from '../student/student.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ListModule,
    IonicModule,
    SkyframeModule,
    LaddaModule,
    StatusModule,
    ExportCsvModule,
    FilterModule,
    DateRangeModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    ListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    CourseModule,
    StudentModule
  ],
  declarations: [
    CourseEnrollmentAddPageComponent,
    CourseEnrollmentDetailComponent,
    CourseEnrollmentDetailPageComponent,
    CourseEnrollmentAutocompleteComponent,
    CourseEnrollmentEditPageComponent,
    CourseEnrollmentFormComponent,
    CourseEnrollmentListComponent,
    CourseEnrollmentFilterComponent,
    CourseEnrollmentListPageComponent,
    CourseEnrollmentLayoutComponent
  ],
  exports:         [
    CourseEnrollmentAddPageComponent,
    CourseEnrollmentDetailComponent,
    CourseEnrollmentFormComponent,
    CourseEnrollmentListComponent,
    CourseEnrollmentFilterComponent,
    CourseEnrollmentAutocompleteComponent
  ]
})
@SkfModule({
  entities: [CourseEnrollment]
})
export class CourseEnrollmentModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(CourseEnrollment, 'list', '/course-enrollment', CourseEnrollmentListPageComponent);
    this.shell.registerUseCase(CourseEnrollment, 'add', '/course-enrollment/add', CourseEnrollmentAddPageComponent);
    this.shell.registerUseCase(CourseEnrollment, 'detail', '/course-enrollment/:id', CourseEnrollmentDetailPageComponent);
    this.shell.registerUseCase(CourseEnrollment, 'edit', '/course-enrollment/:id/edit', CourseEnrollmentEditPageComponent);
  }
}
