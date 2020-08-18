import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CoreModule,
  ErrorHandlerProvider,
  MenuProvider,
  SkfAppModule,
  SkfAuthenticationProvider,
  SkfConfig,
  SkyframeModule,
  TokenInterceptor
} from '@skyframe/angular';
import { TreoModule } from '../@treo';
import { TreoConfigModule } from '../@treo/services/config/config.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutModule } from './layout/layout.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FilesModule } from './modules/file/files.module';
import { LaddaModule } from 'angular2-ladda';
import { mainMenu } from './shared/menu/main.menu';
import { DomainModels } from '@escuela/domain';

const skyframeConfig: SkfConfig = {
  environment,
  sharedModels: DomainModels
};

const appConfig: any = {
  theme:  'light',
  layout: 'classy'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    AuthenticationModule,
    MatDialogModule,
    FilesModule,
    LaddaModule,
    SkyframeModule.forRoot(skyframeConfig),

    // Treo
    TreoModule,
    TreoConfigModule.forRoot(appConfig)
  ],
  entryComponents: [],
  providers: [
    SkfAuthenticationProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerProvider
    },
    AppRoutingModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
@SkfAppModule({
  entities: []
})
export class AppModule {
  constructor(
    private menuProvider: MenuProvider,
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ) {
    this.menuProvider.addMenu('main', mainMenu);

    // Register icon sets
    this._matIconRegistry.addSvgIconSet(
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/material-twotone.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'mat_outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/material-outline.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'iconsmind',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/iconsmind.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'dripicons',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/dripicons.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'feather',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/feather.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'heroicons_outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/heroicons-outline.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'heroicons_solid',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/heroicons-solid.svg'
      )
    );
  }
}
