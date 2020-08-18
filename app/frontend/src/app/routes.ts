import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { EmptyLayoutComponent } from './layout/empty/empty.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:         'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.routing.module').then(
            mod => mod.DashboardRoutingModule
          )
      },
      {
        path:         'user',
        loadChildren: () =>
        import('./modules/user/user.routing.module').then(
          mod => mod.UserRoutingModule
        )
      },
      {
        path:         'school',
        loadChildren: () =>
        import('./modules/school/school.routing.module').then(
          mod => mod.SchoolRoutingModule
        )
      },
      {
        path:         'school-class',
        loadChildren: () =>
        import('./modules/school-class/school-class.routing.module').then(
          mod => mod.SchoolClassRoutingModule
        )
      },
      {
        path:         'teacher',
        loadChildren: () =>
        import('./modules/teacher/teacher.routing.module').then(
          mod => mod.TeacherRoutingModule
        )
      },
      {
        path:         'course-enrollment',
        loadChildren: () =>
        import('./modules/course-enrollment/course-enrollment.routing.module').then(
          mod => mod.CourseEnrollmentRoutingModule
        )
      },
      {
        path:         'student',
        loadChildren: () =>
        import('./modules/student/student.routing.module').then(
          mod => mod.StudentRoutingModule
        )
      },
      {
        path:         'course',
        loadChildren: () =>
        import('./modules/course/course.routing.module').then(
          mod => mod.CourseRoutingModule
        )
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  {
    path:      '',
    component: EmptyLayoutComponent,
    children:  [
      {
        path:         'auth',
        loadChildren: () =>
          import('./modules/authentication/authentication.routing.module').then(
            mod => mod.AuthenticationRoutingModule
          )
      }
    ]
  }
];
