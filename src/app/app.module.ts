import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomePageDashboardComponent } from './home-page-dashboard/home-page-dashboard.component';
import { TestPageComponent } from './test-page/test-page.component';

import { HttpClientModule } from '@angular/common/http';
import { DialogsComponent } from './dialogs/dialogs.component';

import {MatExpansionModule, MatExpansionPanelHeader, MatExpansionPanelDescription} from '@angular/material';
import { MatExpansionPanel, MatAccordion, MatExpansionPanelTitle} from '@angular/material';

import { MatFormFieldModule, MatInputModule} from '@angular/material';


// import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageDashboardComponent,
    TestPageComponent,
    DialogsComponent,

  ],
  imports: [
    // DemoMaterialModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,

    MatDialogModule,

    MatExpansionModule,

    MatFormFieldModule,

    MatInputModule,
  ],
  providers: [
  ],
  entryComponents: [DialogsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
