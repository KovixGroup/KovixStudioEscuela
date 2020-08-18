import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoplistPageRoutingModule } from './shoplist-routing.module';

import { ShoplistPage } from './shoplist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoplistPageRoutingModule
  ],
  declarations: [ShoplistPage]
})
export class ShoplistPageModule {}
