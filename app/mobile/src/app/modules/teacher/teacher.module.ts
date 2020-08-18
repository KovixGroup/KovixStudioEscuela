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
import { Teacher } from './teacher';
import { TeacherAddPageComponent } from './pages/teacher-add/teacher-add.page.component';
import { TeacherDetailComponent } from './components/teacher-detail/teacher-detail.component';
import { TeacherAutocompleteComponent } from './components/teacher-autocomplete/teacher-autocomplete.component';
import { TeacherDetailPageComponent } from './pages/teacher-detail/teacher-detail.page.component';
import { TeacherEditPageComponent } from './pages/teacher-edit/teacher-edit.page.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherFilterComponent } from './components/teacher-filter/teacher-filter.component';
import { TeacherListPageComponent } from './pages/teacher-list/teacher-list.page.component';
import { TeacherLayoutComponent } from './layout/teacher.layout.component';

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
    TeacherAddPageComponent,
    TeacherDetailComponent,
    TeacherDetailPageComponent,
    TeacherAutocompleteComponent,
    TeacherEditPageComponent,
    TeacherFormComponent,
    TeacherListComponent,
    TeacherFilterComponent,
    TeacherListPageComponent,
    TeacherLayoutComponent
  ],
  exports:         [
    TeacherAddPageComponent,
    TeacherDetailComponent,
    TeacherFormComponent,
    TeacherListComponent,
    TeacherFilterComponent,
    TeacherAutocompleteComponent
  ]
})
@SkfModule({
  entities: [Teacher]
})
export class TeacherModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(Teacher, 'list', '/teacher', TeacherListPageComponent);
    this.shell.registerUseCase(Teacher, 'add', '/teacher/add', TeacherAddPageComponent);
    this.shell.registerUseCase(Teacher, 'detail', '/teacher/:id', TeacherDetailPageComponent);
    this.shell.registerUseCase(Teacher, 'edit', '/teacher/:id/edit', TeacherEditPageComponent);
  }
}
