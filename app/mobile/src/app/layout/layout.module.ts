import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyLayoutComponent } from './empty/empty.layout.component';
import { SidebarLayoutComponent } from './sidebar/sidebar.layout.component';

@NgModule({
  declarations: [SidebarLayoutComponent, EmptyLayoutComponent],
  exports:      [EmptyLayoutComponent, SidebarLayoutComponent],
  imports:      [CommonModule, RouterModule, IonicModule],
  providers:    []
})
export class LayoutModule {}
