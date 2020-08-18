import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Shell,
  MenuItemDefinition,
  MenuProvider,
  SkfAuthenticationProvider
} from '@skyframe/angular';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar.layout.component.html',
  styleUrls: ['./sidebar.layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutComponent implements OnInit {
  public menuItems: MenuItemDefinition[];

  public selectedIndex = 0;

  constructor(
    private menuProvider: MenuProvider,
    private authenticationProvider: SkfAuthenticationProvider,
    private shell: Shell
  ) {}

  ngOnInit() {
    this.menuItems = this.menuProvider.getMenu('main');
  }

  signOut(): Promise<boolean> {
    this.authenticationProvider.logout();
    return this.shell.triggerRootUseCase('sign-in');
  }
}
