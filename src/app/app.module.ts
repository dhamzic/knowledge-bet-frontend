import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './core/interceptors/loader/loader.component';
import { LoaderInterceptor } from './core/interceptors/loader/loader.interceptor';
import { HeaderToolbarComponent } from './shared/components/header-toolbar/header-toolbar.component';
import { PrimengModule } from './shared/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
