import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { EmptyLayoutComponent } from './layout/empty/empty.layout.component';
import { SidebarLayoutComponent } from './layout/sidebar/sidebar.layout.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component:   SidebarLayoutComponent,
    children: [
      {
        path:         'dashboard',
        loadChildren: () => import('./grociapp/folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'folder/:id',
        loadChildren: () => import('./grociapp/folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./grociapp/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./grociapp/categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'shoplist',
        loadChildren: () => import('./grociapp/shoplist/shoplist.module').then( m => m.ShoplistPageModule)
      },
      {
        path: 'singleproduct',
        loadChildren: () => import('./grociapp/singleproduct/singleproduct.module').then( m => m.SingleproductPageModule)
      },
      {
        path: 'shoppingcart',
        loadChildren: () => import('./grociapp/shoppingcart/shoppingcart.module').then( m => m.ShoppingcartPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./grociapp/checkout/checkout.module').then( m => m.CheckoutPageModule)
      },
      {
        path: 'myprofile',
        loadChildren: () => import('./grociapp/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
      },
      {
        path: 'myaddress',
        loadChildren: () => import('./grociapp/myaddress/myaddress.module').then( m => m.MyaddressPageModule)
      },
      {
        path: 'orderlist',
        loadChildren: () => import('./grociapp/orderlist/orderlist.module').then( m => m.OrderlistPageModule)
      },
      {
        path: 'contactus',
        loadChildren: () => import('./grociapp/contactus/contactus.module').then( m => m.ContactusPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./grociapp/faq/faq.module').then( m => m.FaqPageModule)
      },
      {
        path: 'notfound',
        loadChildren: () => import('./grociapp/notfound/notfound.module').then( m => m.NotfoundPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('./grociapp/wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
        path: 'mywallet',
        loadChildren: () => import('./grociapp/mywallet/mywallet.module').then( m => m.MywalletPageModule)
      },
      {
        path: 'editprofile',
        loadChildren: () => import('./grociapp/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
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
    children: [
      {
        path:      'auth',
        loadChildren: () =>
          import('./modules/authentication/authentication.routing.module').then(
            mod => mod.AuthenticationRoutingModule
          )
      }
    ]
  }
];
