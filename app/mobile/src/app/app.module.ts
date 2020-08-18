import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { mainMenu } from './shared/menu/main.menu';
import { environment } from '../environments/environment';
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
import { DomainModels } from '@escuela/domain';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { LayoutModule } from './layout/layout.module';

const skyframeConfig: SkfConfig = {
  environment,
  sharedModels: DomainModels
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    LayoutModule,
    AuthenticationModule,
    CoreModule,
    SkyframeModule.forRoot(skyframeConfig),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
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
  ],
  bootstrap: [AppComponent]
})
@SkfAppModule({
  entities: []
})
export class AppModule {
  constructor(private menuProvider: MenuProvider) {
    this.menuProvider.addMenu('main', mainMenu);
  }
}
