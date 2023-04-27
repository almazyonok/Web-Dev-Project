import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptors/token.interceptor";
import {SharedModule} from "./shared/shared.module";

const INTERCEPTOR = (type: any) => ({
  provide: HTTP_INTERCEPTORS,
  useClass: type,
  multi: true,
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    INTERCEPTOR(TokenInterceptor)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
