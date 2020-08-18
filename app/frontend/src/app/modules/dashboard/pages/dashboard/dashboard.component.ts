import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApexOptions } from 'ng-apexcharts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { finance } from '../../../../data/mock/dashboards/finance/data';

@Component({
  selector:        'app-dashboard',
  templateUrl:     './dashboard.component.html',
  styleUrls:       ['./dashboard.component.scss'],
  encapsulation:   ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  data: any;

  accountBalanceOptions: ApexOptions;

  recentTransactionsDataSource: MatTableDataSource<any>;

  recentTransactionsTableColumns: string[];

  @ViewChild('recentTransactionsTable', { read: MatSort, static: false })
  recentTransactionsTableMatSort: MatSort;

  private _unsubscribeAll: Subject<any>;

  constructor() {
    // Set the private defaults
    this._unsubscribeAll = new Subject();

    // Set the defaults
    this.recentTransactionsDataSource = new MatTableDataSource();
    this.recentTransactionsTableColumns = [
      'transactionId',
      'date',
      'name',
      'amount',
      'status'
    ];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Store the data
    this.data = finance;

    // Store the table data
    this.recentTransactionsDataSource.data = this.data.recentTransactions;

    // Prepare the chart data
    this._prepareChartData();
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    // Make the data source sortable
    this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Prepare the chart data from the data
   *
   * @private
   */
  private _prepareChartData(): void {
    // Account balance
    this.accountBalanceOptions = {
      chart: {
        animations: {
          speed:            400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: 'inherit',
        foreColor:  'inherit',
        width:      '100%',
        height:     '100%',
        type:       'area',
        sparkline:  {
          enabled: true
        }
      },
      colors: ['#A3BFFA', '#667EEA'],
      fill:   {
        colors:  ['#CED9FB', '#AECDFD'],
        opacity: 0.5,
        type:    'solid'
      },
      series: this.data.accountBalance.series,
      stroke: {
        curve: 'straight',
        width: 2
      },
      tooltip: {
        theme: 'dark',
        x:     {
          format: 'MMM dd, yyyy'
        },
        y: {
          formatter: value => {
            return value + '%';
          }
        }
      },
      xaxis: {
        type: 'datetime'
      }
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
