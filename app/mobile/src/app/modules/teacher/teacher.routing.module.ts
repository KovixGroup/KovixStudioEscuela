import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherModule } from './teacher.module';
import { TeacherAddPageComponent } from './pages/teacher-add/teacher-add.page.component';
import { TeacherDetailPageComponent } from './pages/teacher-detail/teacher-detail.page.component';
import { TeacherEditPageComponent } from './pages/teacher-edit/teacher-edit.page.component';
import { TeacherListPageComponent } from './pages/teacher-list/teacher-list.page.component';
import { TeacherLayoutComponent } from './layout/teacher.layout.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherLayoutComponent,
    children: [
      { path: '', component: TeacherListPageComponent },
      { path: 'add', component: TeacherAddPageComponent },
      { path: ':id', component: TeacherDetailPageComponent },
      { path: ':id/edit', component: TeacherEditPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), TeacherModule],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
