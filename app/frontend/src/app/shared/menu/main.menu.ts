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
    useCaseAlias: 'dashboard',
    routerLink:   '/dashboard',
    icon:         'feather:home'
  },
  {
    text:         'Users',
    entityClass:  User,
    useCaseAlias: 'list',
    routerLink:   '/user',
    icon:         'feather:credit-card'
  },
  {
    text:         'Schools',
    entityClass:  School,
    useCaseAlias: 'list',
    routerLink:   '/school',
    icon:         'feather:credit-card'
  },
  {
    text:         'SchoolClasses',
    entityClass:  SchoolClass,
    useCaseAlias: 'list',
    routerLink:   '/school-class',
    icon:         'feather:credit-card'
  },
  {
    text:         'Teachers',
    entityClass:  Teacher,
    useCaseAlias: 'list',
    routerLink:   '/teacher',
    icon:         'feather:credit-card'
  },
  {
    text:         'CourseEnrollments',
    entityClass:  CourseEnrollment,
    useCaseAlias: 'list',
    routerLink:   '/course-enrollment',
    icon:         'feather:credit-card'
  },
  {
    text:         'Students',
    entityClass:  Student,
    useCaseAlias: 'list',
    routerLink:   '/student',
    icon:         'feather:credit-card'
  }
];
