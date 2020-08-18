import { SharedModule } from './../../shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelButtonComponent } from './cancel-button.component';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('CancelButtonComponent', () => {
  let component: CancelButtonComponent;
  let fixture: ComponentFixture<CancelButtonComponent>;

  const routes: Route[] = [
    {
      path: '',
      component: CancelButtonComponent
    },
    {
      path: 'test',
      component: CancelButtonComponent
    }
  ];

  let router: Router;
  let location: Location;
  location;
  router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back to root', () => {
    fixture.ngZone.run(() => {
      router.navigate(['test']);
      component.onClick();
      component.click.subscribe(() => {
        fixture.detectChanges();
        expect(location.path()).toBe('/');
      });
    });
  });
});
