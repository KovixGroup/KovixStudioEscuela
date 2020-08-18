import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'tabone',
    loadChildren: () => import('./tabone/tabone.module').then( m => m.TabonePageModule)
  },
  {
    path: 'tabtwo',
    loadChildren: () => import('./tabtwo/tabtwo.module').then( m => m.TabtwoPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
