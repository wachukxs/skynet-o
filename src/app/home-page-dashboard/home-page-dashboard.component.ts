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
  airports = [
    { country: 'United States', name: 'Hartsfield–Jackson Atlanta International Airport', code: 'KATL' },
    { country: 'China', name: 'Beijing Capital International Airport', code: 'ZBAA' },
    { country: 'United States', name: 'Los Angeles International Airport', code: 'KLAX' },
    { country: 'Japan', name: 'Tokyo Haneda Airport', code: 'RJTT' },
    { country: 'United Arab Emirates', name: 'Dubai International Airport', code: 'OMDB' },
    { country: 'United States', name: 'O\'Hare International Airport', code: 'KORD' },
    { country: 'United Kingdom', name: 'London Heathrow Airport', code: 'EGLL' },
    { country: 'China', name: 'Shanghai Pudong International Airport', code: 'ZSPD' },
    { country: 'Hong Kong', name: 'Hong Kong International Airport', code: 'VHHH' },
    { country: 'France', name: 'Paris-Charles de Gaulle Airport', code: 'LFPG' }
  ];
  all = {
    KATL: {
      arr: [],
      dep: []
    },
    ZBAA: {
      arr: [],
      dep: []
    },
    KLAX: {
      arr: [],
      dep: []
    },
    RJTT: {
      arr: [],
      dep: []
    },
    OMDB: {
      arr: [],
      dep: []
    },
    KORD: {
      arr: [],
      dep: []
    },
    EGLL: {
      arr: [],
      dep: []
    },
    ZSPD: {
      arr: [],
      dep: []
    },
    VHHH: {
      arr: [],
      dep: []
    },
    LFPG: {
      arr: [],
      dep: []
    },
  };
  constructor(private http: HttpClient, public dialog: MatDialog) {
  }
  openDialog(w) {
    this.dialogRef = this.dialog.open(DialogsComponent, {
      data: {
        code: w,
        animal: 'panda',
        airport: 'NYC',
        arr: this.all[w].arr,
        dep: this.all[w].dep
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
