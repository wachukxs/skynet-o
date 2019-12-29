import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatGridTile, MatGridList} from '@angular/material';

@NgModule ({
  imports: [
    MatGridTile, MatGridList,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule
  ],
})

@Component({
  selector: 'app-home-page-dashboard',
  templateUrl: './home-page-dashboard.component.html',
  styleUrls: ['./home-page-dashboard.component.css']
})

export class HomePageDashboardComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('https://opensky-network.org/api/states/all?time=1458564121&icao24=3c6444').subscribe((data) => {
      console.log('data:', data);
    });
  }

  ngOnInit() {

  }

}
