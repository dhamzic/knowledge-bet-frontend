import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './core/interceptors/loader/loader.component';
import { LoaderInterceptor } from './core/interceptors/loader/loader.interceptor';
import { HeaderToolbarComponent } from './shared/components/header-toolbar/header-toolbar.component';
import { PrimengModule } from './shared/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
