import { Component, OnInit, Inject } from '@angular/core';
import { NgModule } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatGridTile, MatGridList } from '@angular/material';

import { DialogsComponent } from '../dialogs/dialogs.component';

@NgModule({
  imports: [
    MatGridTile, MatGridList,
    MatCardModule,
    MatButtonModule,
    HttpClientModule, HttpClient,
    MatGridListModule,
    MatDialog,

    MatDialogModule
  ],
  exports: [
    HttpClientModule, HttpClient
  ],
  providers: [
  ]
})

@Component({
  selector: 'app-home-page-dashboard',
  templateUrl: './home-page-dashboard.component.html',
  styleUrls: ['./home-page-dashboard.component.css']
})

export class HomePageDashboardComponent implements OnInit {
  dialogRef;
  constructor(private http: HttpClient, public dialog: MatDialog) {
  }
  openDialog() {
    this.dialogRef = this.dialog.open(DialogsComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  showFlights() { // &icao24=3e1bf9
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data) => {
      console.log('data:', data);
    });
  }

  ngOnInit() {
    this.showFlights();
  }

}
