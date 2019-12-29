import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule ({
  imports: [
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
})

@Component({
  selector: 'app-home-page-dashboard',
  templateUrl: './home-page-dashboard.component.html',
  styleUrls: ['./home-page-dashboard.component.css']
})

export class HomePageDashboardComponent implements OnInit {

  constructor(/* private http: HttpClientModule */) { }

  ngOnInit() {
  }

}
