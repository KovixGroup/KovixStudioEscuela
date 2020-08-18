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
import { Course } from './course';
import { CourseAddPageComponent } from './pages/course-add/course-add.page.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseAutocompleteComponent } from './components/course-autocomplete/course-autocomplete.component';
import { CourseDetailPageComponent } from './pages/course-detail/course-detail.page.component';
import { CourseEditPageComponent } from './pages/course-edit/course-edit.page.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFilterComponent } from './components/course-filter/course-filter.component';
import { CourseListPageComponent } from './pages/course-list/course-list.page.component';
import { CourseLayoutComponent } from './layout/course.layout.component';

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
    MatDividerModule
  ],
  declarations: [
    CourseAddPageComponent,
    CourseDetailComponent,
    CourseDetailPageComponent,
    CourseAutocompleteComponent,
    CourseEditPageComponent,
    CourseFormComponent,
    CourseListComponent,
    CourseFilterComponent,
    CourseListPageComponent,
    CourseLayoutComponent
  ],
  exports:         [
    CourseAddPageComponent,
    CourseDetailComponent,
    CourseFormComponent,
    CourseListComponent,
    CourseFilterComponent,
    CourseAutocompleteComponent
  ]
})
@SkfModule({
  entities: [Course]
})
export class CourseModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(Course, 'list', '/course', CourseListPageComponent);
    this.shell.registerUseCase(Course, 'add', '/course/add', CourseAddPageComponent);
    this.shell.registerUseCase(Course, 'detail', '/course/:id', CourseDetailPageComponent);
    this.shell.registerUseCase(Course, 'edit', '/course/:id/edit', CourseEditPageComponent);
  }
}
