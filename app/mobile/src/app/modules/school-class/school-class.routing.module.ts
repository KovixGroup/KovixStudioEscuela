import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolClassModule } from './school-class.module';
import { SchoolClassAddPageComponent } from './pages/school-class-add/school-class-add.page.component';
import { SchoolClassDetailPageComponent } from './pages/school-class-detail/school-class-detail.page.component';
import { SchoolClassEditPageComponent } from './pages/school-class-edit/school-class-edit.page.component';
import { SchoolClassListPageComponent } from './pages/school-class-list/school-class-list.page.component';
import { SchoolClassLayoutComponent } from './layout/school-class.layout.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolClassLayoutComponent,
    children: [
      { path: '', component: SchoolClassListPageComponent },
      { path: 'add', component: SchoolClassAddPageComponent },
      { path: ':id', component: SchoolClassDetailPageComponent },
      { path: ':id/edit', component: SchoolClassEditPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SchoolClassModule],
  exports: [RouterModule]
})
export class SchoolClassRoutingModule {}
