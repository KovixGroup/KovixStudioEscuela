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
import { Student } from './student';
import { StudentAddPageComponent } from './pages/student-add/student-add.page.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentAutocompleteComponent } from './components/student-autocomplete/student-autocomplete.component';
import { StudentDetailPageComponent } from './pages/student-detail/student-detail.page.component';
import { StudentEditPageComponent } from './pages/student-edit/student-edit.page.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFilterComponent } from './components/student-filter/student-filter.component';
import { StudentListPageComponent } from './pages/student-list/student-list.page.component';
import { StudentLayoutComponent } from './layout/student.layout.component';

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
    StudentAddPageComponent,
    StudentDetailComponent,
    StudentDetailPageComponent,
    StudentAutocompleteComponent,
    StudentEditPageComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentFilterComponent,
    StudentListPageComponent,
    StudentLayoutComponent
  ],
  exports:         [
    StudentAddPageComponent,
    StudentDetailComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentFilterComponent,
    StudentAutocompleteComponent
  ]
})
@SkfModule({
  entities: [Student]
})
export class StudentModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(Student, 'list', '/student', StudentListPageComponent);
    this.shell.registerUseCase(Student, 'add', '/student/add', StudentAddPageComponent);
    this.shell.registerUseCase(Student, 'detail', '/student/:id', StudentDetailPageComponent);
    this.shell.registerUseCase(Student, 'edit', '/student/:id/edit', StudentEditPageComponent);
  }
}
