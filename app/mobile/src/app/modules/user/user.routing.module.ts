import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user.module';
import { UserAddPageComponent } from './pages/user-add/user-add.page.component';
import { UserDetailPageComponent } from './pages/user-detail/user-detail.page.component';
import { UserEditPageComponent } from './pages/user-edit/user-edit.page.component';
import { UserListPageComponent } from './pages/user-list/user-list.page.component';
import { UserLayoutComponent } from './layout/user.layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserListPageComponent },
      { path: 'add', component: UserAddPageComponent },
      { path: ':id', component: UserDetailPageComponent },
      { path: ':id/edit', component: UserEditPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), UserModule],
  exports: [RouterModule]
})
export class UserRoutingModule {}
