import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { LayoutModule } from './core/layout/layout.module';
import { AdvertModule } from './features/advert/advert.module';
import { AccountModule } from './features/account/account.module';
import { SignInModule } from './core/auth/modals/sign-in/sign-in.module';
import { SignUpModule } from './core/auth/modals/sign-up/sign-up.module';
import { TokenInterceptor } from './shared/interceptors/token/token.interceptor';
import { ToastModule } from 'primeng/toast';
import '@angular/common/locales/global/ru';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SignInModule,
    SignUpModule,
    LayoutModule,
    AdvertModule,
    AccountModule,
    ToastModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RUS' },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
