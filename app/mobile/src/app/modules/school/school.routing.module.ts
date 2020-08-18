import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolModule } from './school.module';
import { SchoolAddPageComponent } from './pages/school-add/school-add.page.component';
import { SchoolDetailPageComponent } from './pages/school-detail/school-detail.page.component';
import { SchoolEditPageComponent } from './pages/school-edit/school-edit.page.component';
import { SchoolListPageComponent } from './pages/school-list/school-list.page.component';
import { SchoolLayoutComponent } from './layout/school.layout.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolLayoutComponent,
    children: [
      { path: '', component: SchoolListPageComponent },
      { path: 'add', component: SchoolAddPageComponent },
      { path: ':id', component: SchoolDetailPageComponent },
      { path: ':id/edit', component: SchoolEditPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SchoolModule],
  exports: [RouterModule]
})
export class SchoolRoutingModule {}
