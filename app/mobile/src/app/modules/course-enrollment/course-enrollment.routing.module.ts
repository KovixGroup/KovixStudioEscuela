import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseEnrollmentModule } from './course-enrollment.module';
import { CourseEnrollmentAddPageComponent } from './pages/course-enrollment-add/course-enrollment-add.page.component';
import { CourseEnrollmentDetailPageComponent } from './pages/course-enrollment-detail/course-enrollment-detail.page.component';
import { CourseEnrollmentEditPageComponent } from './pages/course-enrollment-edit/course-enrollment-edit.page.component';
import { CourseEnrollmentListPageComponent } from './pages/course-enrollment-list/course-enrollment-list.page.component';
import { CourseEnrollmentLayoutComponent } from './layout/course-enrollment.layout.component';

const routes: Routes = [
  {
    path: '',
    component: CourseEnrollmentLayoutComponent,
    children: [
      { path: '', component: CourseEnrollmentListPageComponent },
      { path: 'add', component: CourseEnrollmentAddPageComponent },
      { path: ':id', component: CourseEnrollmentDetailPageComponent },
      { path: ':id/edit', component: CourseEnrollmentEditPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CourseEnrollmentModule],
  exports: [RouterModule]
})
export class CourseEnrollmentRoutingModule {}
