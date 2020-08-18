import { AppModule } from 'src/app/app.module';
import { ApplicationInitStatus } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SchoolClassFilterComponent } from './school-class-filter.component';

describe('SchoolClassFilterComponent', () => {
  let component: SchoolClassFilterComponent;
  let fixture: ComponentFixture<SchoolClassFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(async() => {
    await TestBed.get(ApplicationInitStatus).donePromise;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
