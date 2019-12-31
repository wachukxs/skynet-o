import { Component, OnInit, Inject } from '@angular/core';
import { NgModule } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
    { country: 'United States', name: 'Hartsfield–Jackson Atlanta International Airport', code: 'KATL', img: 'https://304ljw4amcep3ali496xph6b-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Hartsfield-Jackson-Atlanta-International-Airport-Canopy-Night-2-1900-1600x1069.jpg' },
    { country: 'China', name: 'Beijing Capital International Airport', code: 'ZBAA', img: 'https://s28477.pcdn.co/wp-content/uploads/2017/12/PEK_1-984x554.jpg' },
    { country: 'United States', name: 'Los Angeles International Airport', code: 'KLAX', img: 'https://3rxg9qea18zhtl6s2u8jammft-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/lax_automatic_people_mover_aerial_view.jpg' },
    { country: 'Japan', name: 'Tokyo Haneda Airport', code: 'RJTT', img: 'https://a3.cdn.japantravel.com/photo/44799-184802/1000/tokyo-tokyo-s-haneda-airport-184802.jpg' },
    { country: 'United Arab Emirates', name: 'Dubai International Airport', code: 'OMDB', img: 'https://images.trvl-media.com/hotels/2000000/1550000/1546500/1546463/317739cf_z.jpg' },
    { country: 'United States', name: 'O\'Hare International Airport', code: 'KORD', img: 'https://www.airport-technology.com/wp-content/uploads/sites/14/2019/07/6030213583_33s760e0cb_b.jpg' },
    { country: 'United Kingdom', name: 'London Heathrow Airport', code: 'EGLL', img: 'https://upgradedpoints.com/wp-content/uploads/2019/05/London-Heathrow-Airport-2.jpg' },
    { country: 'China', name: 'Shanghai Pudong International Airport', code: 'ZSPD', img: 'https://airlines-airports.com/wp-content/uploads/2018/02/Shanghai-Pudong-International-Airport-570x350.jpg' },
    { country: 'Hong Kong', name: 'Hong Kong International Airport', code: 'VHHH', img: 'http://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2019/09/Hong-Kong-International-Airport.jpg' },
    { country: 'France', name: 'Paris-Charles de Gaulle Airport', code: 'LFPG', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gare_de_l%27a%C3%A9roport_Charles-de-Gaulle_2_TGV_2018.jpg/1200px-Gare_de_l%27a%C3%A9roport_Charles-de-Gaulle_2_TGV_2018.jpg' }
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
        code: w.code,
        country: w.country,
        name: w.name,
        animal: 'panda',
        airport: 'NYC',
        arr: this.all[w.code].arr,
        dep: this.all[w.code].dep
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
