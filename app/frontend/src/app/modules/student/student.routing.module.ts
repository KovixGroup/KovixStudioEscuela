import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentModule } from './student.module';
import { StudentAddPageComponent } from './pages/student-add/student-add.page.component';
import { StudentDetailPageComponent } from './pages/student-detail/student-detail.page.component';
import { StudentEditPageComponent } from './pages/student-edit/student-edit.page.component';
import { StudentListPageComponent } from './pages/student-list/student-list.page.component';

const routes: Routes = [
  { path: '', component: StudentListPageComponent },
  { path: 'add', component: StudentAddPageComponent },
  { path: ':id', component: StudentDetailPageComponent },
  { path: ':id/edit', component: StudentEditPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), StudentModule],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
