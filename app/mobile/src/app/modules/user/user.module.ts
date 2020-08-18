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
import { User } from './user';
import { UserAddPageComponent } from './pages/user-add/user-add.page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserAutocompleteComponent } from './components/user-autocomplete/user-autocomplete.component';
import { UserDetailPageComponent } from './pages/user-detail/user-detail.page.component';
import { UserEditPageComponent } from './pages/user-edit/user-edit.page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserListPageComponent } from './pages/user-list/user-list.page.component';
import { UserLayoutComponent } from './layout/user.layout.component';

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
    UserAddPageComponent,
    UserDetailComponent,
    UserDetailPageComponent,
    UserAutocompleteComponent,
    UserEditPageComponent,
    UserFormComponent,
    UserListComponent,
    UserFilterComponent,
    UserListPageComponent,
    UserLayoutComponent
  ],
  exports:         [
    UserAddPageComponent,
    UserDetailComponent,
    UserFormComponent,
    UserListComponent,
    UserFilterComponent,
    UserAutocompleteComponent
  ]
})
@SkfModule({
  entities: [User]
})
export class UserModule {
  constructor(private shell: Shell) {
    this.shell.registerUseCase(User, 'list', '/user', UserListPageComponent);
    this.shell.registerUseCase(User, 'add', '/user/add', UserAddPageComponent);
    this.shell.registerUseCase(User, 'detail', '/user/:id', UserDetailPageComponent);
    this.shell.registerUseCase(User, 'edit', '/user/:id/edit', UserEditPageComponent);
  }
}
