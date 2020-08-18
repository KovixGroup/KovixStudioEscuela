import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainModels } from '@escuela/domain';
import {
  CoreModule,
  SkfAuthenticationProvider,
  SkyframeModule
} from '@skyframe/angular';
import { environment } from '../../../../environments/environment';
import { LayoutModule } from '../../layout.module';
import { AuthenticationActionsComponent } from './authentication-actions.component';
import '../../../modules/user/user.module';
import '../../../modules/authentication/authentication.module';

describe('AuthenticationActionsComponent', () => {
  let component: AuthenticationActionsComponent;
  let fixture: ComponentFixture<AuthenticationActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        CoreModule,
        SkyframeModule.forRoot({
          environment,
          sharedModels: { User: DomainModels.User }
        })
      ],
      providers: [SkfAuthenticationProvider]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
