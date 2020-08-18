import { MenuItemDefinition } from '@skyframe/angular';

import { User } from '../../modules/user/user';
import { School } from '../../modules/school/school';
import { SchoolClass } from '../../modules/school-class/school-class';
import { Teacher } from '../../modules/teacher/teacher';
import { CourseEnrollment } from '../../modules/course-enrollment/course-enrollment';
import { Student } from '../../modules/student/student';

export const mainMenu: MenuItemDefinition[] = [
  {
    text:         'Dashboard',
    routerLink:   '/dashboard',
    icon:         'home'
  },
  {
    text:         'Users',
    entityClass:  User,
    useCaseAlias: 'list',
    routerLink:   '/user',
    icon:         'browsers'
  },
  {
    text:         'Schools',
    entityClass:  School,
    useCaseAlias: 'list',
    routerLink:   '/school',
    icon:         'browsers'
  },
  {
    text:         'SchoolClasses',
    entityClass:  SchoolClass,
    useCaseAlias: 'list',
    routerLink:   '/school-class',
    icon:         'browsers'
  },
  {
    text:         'Teachers',
    entityClass:  Teacher,
    useCaseAlias: 'list',
    routerLink:   '/teacher',
    icon:         'browsers'
  },
  {
    text:         'CourseEnrollments',
    entityClass:  CourseEnrollment,
    useCaseAlias: 'list',
    routerLink:   '/course-enrollment',
    icon:         'browsers'
  },
  {
    text:         'Students',
    entityClass:  Student,
    useCaseAlias: 'list',
    routerLink:   '/student',
    icon:         'browsers'
  }
];
