import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoplistPage } from './shoplist.page';

const routes: Routes = [
  {
    path: '',
    component: ShoplistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoplistPageRoutingModule {}
