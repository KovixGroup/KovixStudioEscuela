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
import { Student } from './student';
import { StudentAddPageComponent } from './pages/student-add/student-add.page.component';
import { StudentAddPopupComponent } from './popups/student-add/student-add-popup.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentAutocompleteComponent } from './components/student-autocomplete/student-autocomplete.component';
import { StudentDetailPageComponent } from './pages/student-detail/student-detail.page.component';
import { StudentEditPageComponent } from './pages/student-edit/student-edit.page.component';
import { StudentEditPopupComponent } from './popups/student-edit/student-edit-popup.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFilterComponent } from './components/student-filter/student-filter.component';
import { StudentListPageComponent } from './pages/student-list/student-list.page.component';

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
    MatDividerModule
  ],
  declarations: [
    StudentAddPageComponent,
    StudentAddPopupComponent,
    StudentDetailComponent,
    StudentAutocompleteComponent,
    StudentDetailPageComponent,
    StudentEditPageComponent,
    StudentEditPopupComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentFilterComponent,
    StudentListPageComponent
  ],
  entryComponents: [
    StudentAddPopupComponent,
    StudentEditPopupComponent
  ],
  exports:         [
    StudentAddPageComponent,
    StudentAddPopupComponent,
    StudentDetailComponent,
    StudentAutocompleteComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentFilterComponent
  ]
})
@SkfModule({
  entities: [Student]
})
export class StudentModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(Student, 'list', '/student', StudentListPageComponent);
    this.shell.registerUseCase(Student, 'add', '/student/add', StudentAddPageComponent);
    this.shell.registerUseCase(Student, 'add:popup', '/student/add', StudentAddPopupComponent);
    this.shell.registerUseCase(Student, 'edit:popup', '/student/add', StudentEditPopupComponent);
    this.shell.registerUseCase(Student, 'detail', '/student/:id', StudentDetailPageComponent);
    this.shell.registerUseCase(Student, 'edit', '/student/:id/edit', StudentEditPageComponent);
  }
}
