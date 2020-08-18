import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SkyframeModule } from '@skyframe/angular';
import { TreoNavigationModule } from '../../@treo/components/navigation/navigation.module';
import { AppRoutingModule } from '../app.routing.module';
import { AuthenticationActionsComponent } from './authentication/authentication-actions/authentication-actions.component';
import { UserAvatarComponent } from './common/user-avatar/user-avatar.component';
import { EmptyLayoutComponent } from './empty/empty.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AuthenticationActionsComponent,
    EmptyLayoutComponent,
    UserAvatarComponent
  ],
  exports: [EmptyLayoutComponent, LayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SkyframeModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    TreoNavigationModule
  ],
  providers: []
})
export class LayoutModule {}
