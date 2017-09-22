import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

/* feature imports */
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      LoginModule,
      AppRoutingModule,
      DashboardModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
