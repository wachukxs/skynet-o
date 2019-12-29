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

import { HttpClientModule, HttpClient } from '@angular/common/http';

// import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageDashboardComponent,
    TestPageComponent,
    // HttpClientModule, HttpClient,
    // DemoMaterialModule
  ],
  imports: [
    // DemoMaterialModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    // HttpClientModule, HttpClient,
    /* RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home-page-dashboard', component: HomePageDashboardComponent }
    ]) */
  ],
  providers: [
    // HttpClientModule, HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
