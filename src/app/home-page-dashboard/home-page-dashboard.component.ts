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
  airports: [
    { name: 'United States Hartsfield–Jackson Atlanta International Airport', code: 'KATL' },
    { name: 'China Beijing Capital International Airport', code: 'ZBAA' },
    { name: 'United States Los Angeles International Airport', code: 'KLAX' },
    { name: 'Japan Tokyo Haneda Airport', code: 'RJTT' },
    { name: 'United Arab Emirates Dubai International Airport', code: 'OMDB' },
    { name: 'United States O\'Hare International Airport', code: 'KORD' },
    { name: 'United Kingdom London Heathrow Airport', code: 'EGLL' },
    { name: 'China Shanghai Pudong International Airport', code: 'ZSPD' },
    { name: 'Hong Kong Hong Kong International Airport', code: 'VHHH' },
    { name: 'France Paris-Charles de Gaulle Airport', code: 'LFPG' }
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

  showFlights() { // France Paris-Charles de Gaulle Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=LFPG', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.LFPG.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // Hong Kong Hong Kong International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=VHHH', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.VHHH.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // China Shanghai Pudong International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=ZSPD', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.ZSPD.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United Kingdom London Heathrow Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=EGLL', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.EGLL.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United States O'Hare International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=KORD', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.KORD.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United Arab Emirates Dubai International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=OMDB', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.OMDB.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // Japan Tokyo Haneda Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=RJTT', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.RJTT.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United States Los Angeles International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=KLAX', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.KLAX.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // China Beijing Capital International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=ZBAA', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.ZBAA.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United States Hartsfield–Jackson Atlanta International Airport
    this.http.get('https://opensky-network.org/api/flights/arrival?airport=KATL', { // &begin=1517227200&end=1517230800
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.KATL.arr = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );


    // --- depatures

    this.http.get('https://opensky-network.org/api/flights/departure?airport=LFPG', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.LFPG.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // Hong Kong Hong Kong International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=VHHH', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.VHHH.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // China Shanghai Pudong International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=ZSPD', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.ZSPD.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United Kingdom London Heathrow Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=EGLL', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.EGLL.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United States O'Hare International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=KORD', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.KORD.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United Arab Emirates Dubai International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=OMDB', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.OMDB.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // Japan Tokyo Haneda Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=RJTT', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.RJTT.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United States Los Angeles International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=KLAX', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.KLAX.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // China Beijing Capital International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=ZBAA', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.ZBAA.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );

    // United States Hartsfield–Jackson Atlanta International Airport
    this.http.get('https://opensky-network.org/api/flights/departure?airport=KATL', { // &begin=1517227200&end=1517230800
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*/*'
      })
    }).subscribe((data: Array<object>) => {
      console.log('data:', data);
      this.all.KATL.dep = data;
      // draw the button when we get here later
    }, // success path
      error => { console.error('we had err fetching:', error); } // error path
    );
  }

  ngOnInit() {
    this.showFlights();
  }

}
