import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageDashboardComponent } from './home-page-dashboard/home-page-dashboard.component';
import { LoginComponent } from './login/login.component';
import { TestPageComponent } from './test-page/test-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home-page-dashboard', component: HomePageDashboardComponent },
  { path: 'test-page', component: TestPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
