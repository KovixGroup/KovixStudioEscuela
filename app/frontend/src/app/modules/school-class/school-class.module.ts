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
import { SharedModule } from '../../shared/shared.module';
import { LaddaModule } from 'angular2-ladda';
import { SchoolClass } from './school-class';
import { SchoolClassAddPageComponent } from './pages/school-class-add/school-class-add.page.component';
import { SchoolClassAddPopupComponent } from './popups/school-class-add/school-class-add-popup.component';
import { SchoolClassDetailComponent } from './components/school-class-detail/school-class-detail.component';
import { SchoolClassAutocompleteComponent } from './components/school-class-autocomplete/school-class-autocomplete.component';
import { SchoolClassDetailPageComponent } from './pages/school-class-detail/school-class-detail.page.component';
import { SchoolClassEditPageComponent } from './pages/school-class-edit/school-class-edit.page.component';
import { SchoolClassEditPopupComponent } from './popups/school-class-edit/school-class-edit-popup.component';
import { SchoolClassFormComponent } from './components/school-class-form/school-class-form.component';
import { SchoolClassListComponent } from './components/school-class-list/school-class-list.component';
import { SchoolClassFilterComponent } from './components/school-class-filter/school-class-filter.component';
import { SchoolClassListPageComponent } from './pages/school-class-list/school-class-list.page.component';
import { CourseModule } from '../course/course.module';
import { TeacherModule } from '../teacher/teacher.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ListModule,
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
    TeacherModule
  ],
  declarations: [
    SchoolClassAddPageComponent,
    SchoolClassAddPopupComponent,
    SchoolClassDetailComponent,
    SchoolClassAutocompleteComponent,
    SchoolClassDetailPageComponent,
    SchoolClassEditPageComponent,
    SchoolClassEditPopupComponent,
    SchoolClassFormComponent,
    SchoolClassListComponent,
    SchoolClassFilterComponent,
    SchoolClassListPageComponent
  ],
  entryComponents: [
    SchoolClassAddPopupComponent,
    SchoolClassEditPopupComponent
  ],
  exports:         [
    SchoolClassAddPageComponent,
    SchoolClassAddPopupComponent,
    SchoolClassDetailComponent,
    SchoolClassAutocompleteComponent,
    SchoolClassFormComponent,
    SchoolClassListComponent,
    SchoolClassFilterComponent
  ]
})
@SkfModule({
  entities: [SchoolClass]
})
export class SchoolClassModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(SchoolClass, 'list', '/school-class', SchoolClassListPageComponent);
    this.shell.registerUseCase(SchoolClass, 'add', '/school-class/add', SchoolClassAddPageComponent);
    this.shell.registerUseCase(SchoolClass, 'add:popup', '/school-class/add', SchoolClassAddPopupComponent);
    this.shell.registerUseCase(SchoolClass, 'edit:popup', '/school-class/add', SchoolClassEditPopupComponent);
    this.shell.registerUseCase(SchoolClass, 'detail', '/school-class/:id', SchoolClassDetailPageComponent);
    this.shell.registerUseCase(SchoolClass, 'edit', '/school-class/:id/edit', SchoolClassEditPageComponent);
  }
}
