import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemDefinition, MenuProvider } from '@skyframe/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TreoNavigationService } from '../../../@treo/components/navigation/navigation.service';
import { TreoNavigationItem } from '../../../@treo/components/navigation/navigation.types';
import { TreoMediaWatcherService } from '../../../@treo/services/media-watcher/media-watcher.service';

@Component({
  selector:      'app-layout',
  templateUrl:   './layout.component.html',
  styleUrls:     ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
  public navItems: TreoNavigationItem[];

  public isScreenSmall: boolean;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _treoMediaWatcherService: TreoMediaWatcherService,
    private _treoNavigationService: TreoNavigationService,
    private _router: Router,
    private menuProvider: MenuProvider
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this.loadMenuItems();
  }

  private loadMenuItems(): void {
    this.navItems = [];
    const menuItems: MenuItemDefinition[] = this.menuProvider.getMenu('main');

    for (const menu of menuItems) {
      this.navItems.push({
        title: menu.text,
        type:  'aside',
        link:  menu.routerLink,
        icon:  menu.icon
      });
    }
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to media changes
    this._treoMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        // Check if the breakpoint is 'lt-md'
        this.isScreenSmall = matchingAliases.includes('lt-md');
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleNavigation(key: any): void {
    // Get the navigation
    const navigation = this._treoNavigationService.getComponent(key);

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
