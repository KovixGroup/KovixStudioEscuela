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
import { School } from './school';
import { SchoolAddPageComponent } from './pages/school-add/school-add.page.component';
import { SchoolDetailComponent } from './components/school-detail/school-detail.component';
import { SchoolAutocompleteComponent } from './components/school-autocomplete/school-autocomplete.component';
import { SchoolDetailPageComponent } from './pages/school-detail/school-detail.page.component';
import { SchoolEditPageComponent } from './pages/school-edit/school-edit.page.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolFilterComponent } from './components/school-filter/school-filter.component';
import { SchoolListPageComponent } from './pages/school-list/school-list.page.component';
import { SchoolLayoutComponent } from './layout/school.layout.component';
import { CourseModule } from '../course/course.module';

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
    CourseModule
  ],
  declarations: [
    SchoolAddPageComponent,
    SchoolDetailComponent,
    SchoolDetailPageComponent,
    SchoolAutocompleteComponent,
    SchoolEditPageComponent,
    SchoolFormComponent,
    SchoolListComponent,
    SchoolFilterComponent,
    SchoolListPageComponent,
    SchoolLayoutComponent
  ],
  exports:         [
    SchoolAddPageComponent,
    SchoolDetailComponent,
    SchoolFormComponent,
    SchoolListComponent,
    SchoolFilterComponent,
    SchoolAutocompleteComponent
  ]
})
@SkfModule({
  entities: [School]
})
export class SchoolModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(School, 'list', '/school', SchoolListPageComponent);
    this.shell.registerUseCase(School, 'add', '/school/add', SchoolAddPageComponent);
    this.shell.registerUseCase(School, 'detail', '/school/:id', SchoolDetailPageComponent);
    this.shell.registerUseCase(School, 'edit', '/school/:id/edit', SchoolEditPageComponent);
  }
}
