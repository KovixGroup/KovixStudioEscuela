import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseModule } from './course.module';
import { CourseAddPageComponent } from './pages/course-add/course-add.page.component';
import { CourseDetailPageComponent } from './pages/course-detail/course-detail.page.component';
import { CourseEditPageComponent } from './pages/course-edit/course-edit.page.component';
import { CourseListPageComponent } from './pages/course-list/course-list.page.component';

const routes: Routes = [
  { path: '', component: CourseListPageComponent },
  { path: 'add', component: CourseAddPageComponent },
  { path: ':id', component: CourseDetailPageComponent },
  { path: ':id/edit', component: CourseEditPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CourseModule],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
