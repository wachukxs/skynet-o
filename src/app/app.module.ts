import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomePageDashboardComponent } from './home-page-dashboard/home-page-dashboard.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageDashboardComponent,
    TestPageComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule
    /* RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home-page-dashboard', component: HomePageDashboardComponent }
    ]) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
