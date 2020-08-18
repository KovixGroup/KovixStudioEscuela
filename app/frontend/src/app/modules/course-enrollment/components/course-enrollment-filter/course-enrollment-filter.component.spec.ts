import { AppModule } from 'src/app/app.module';
import { ApplicationInitStatus } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseEnrollmentFilterComponent } from './course-enrollment-filter.component';

describe('CourseEnrollmentFilterComponent', () => {
  let component: CourseEnrollmentFilterComponent;
  let fixture: ComponentFixture<CourseEnrollmentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(async() => {
    await TestBed.get(ApplicationInitStatus).donePromise;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnrollmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
