import { AppModule } from 'src/app/app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseDetailComponent } from './course-detail.component';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
