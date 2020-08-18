import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { EntityFormGroup, ListComponent, Shell } from '@skyframe/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../../user';

@Component({
  selector:    'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls:   ['./user-list.component.scss']
})
export class UserListComponent
  extends ListComponent<User>
  implements AfterViewInit, OnDestroy {
  @ViewChild('list', { read: MatSort, static: false })
  public listTableMatSort: MatSort;

  public listCount: number;

  public listDataSource: MatTableDataSource<
    User | EntityFormGroup<User>
  >;

  public listTableColumns: string[];

  public addingEntity: BehaviorSubject<User | null> = new BehaviorSubject(
    null
  );

  private _unsubscribeAll: Subject<void> = new Subject();

  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(User, shell, activatedRoute);

    this.listCount = 0;
    this.listTableColumns = [
      'id',
      
      'email',
      
      'password',
      'actions'
    ];

    this.listDataSource = new MatTableDataSource();
    this.listDataSource.data = [];
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.listDataSource.sort = this.listTableMatSort;
    this.rows.pipe(takeUntil(this._unsubscribeAll)).subscribe(rows => {
      this.listDataSource.data = rows;
    });
  }

  public trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  public triggerDetail(entityId: number): Promise<boolean> {
    return this.shell.triggerUseCase(this.entityClass, 'detail', [entityId]);
  }

  public triggerAdd(): Promise<boolean> {
    if (this.mode && this.mode.type === 'cart') {
      const instance = this.shell.createEntity(this.entityClass, {});
      this.addingEntity.next(instance);
    } else {
      return this.shell.triggerUseCase(this.entityClass, 'add');
    }
  }

  public addToCart(entity: User): void {
    const newEntity = this.shell.createEntity(this.entityClass, entity.value);
    super.addToCart(newEntity);
    this.cancelAdd();
  }

  public cancelAdd(): void {
    this.addingEntity.next(null);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();

    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
