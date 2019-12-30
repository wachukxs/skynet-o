import { Component, OnInit, Inject } from '@angular/core';
import { NgModule } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
// import {MatExpansionModule, MatExpansionPanelHeader, MatExpansionPanelDescription} from '@angular/material';

export interface DialogData {
  code: string;
  animal: 'panda' | 'unicorn' | 'lion';
  arr: Array<any>;
  dep: Array<any>;
}


@NgModule({
  imports: [
    HttpClient
  ],
})


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
  panelOpenState = false;
  selected = 'departure';
  time: string;
  timeUnix: string;
  all: Array<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private http: HttpClient) { }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    console.log(`${type}: ${event.value.toDateString()} | for ${this.data.code}`);

    console.log(`${event.value.toISOString()}:it`);

    this.time = event.value.toDateString();
    this.timeUnix = event.value.toUTCString();
    if (this.selected !== undefined) {

      // The given time interval must not be larger than 30 days!

      // https://electrictoolbox.com/unix-timestamp-javascript/
      // https://flaviocopes.com/how-to-get-timestamp-javascript/

      // https://stackoverflow.com/a/15911310
      const later = Math.floor(new Date(event.value.toISOString()).getTime() / 1000) + (7 * 24 * 60 * 60);
      const g = `https://opensky-network.org/api/flights/${this.selected}/?airport=${this.data.code}&begin=${Math.floor(new Date(event.value.toISOString()).getTime() / 1000).toString()}&end=${later}`;
      
      console.log(`make call ${g}`);

      this.http.get(g, {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*/*'
        })
      }).subscribe((data: Array<object>) => {
        
        if (data.length > 20) {
          // truncate it and alert user
          data.length = 20;
          this.all = data;
          
        }
        console.log('fetched data:', data);
        // draw the button when we get here later
      }, // success path
        error => { console.error('we had err fetching:', error); } // error path
      );
    }
  }

  ngOnInit() {
  }
  // https://www.world-airport-codes.com/world-top-30-airports.html
}
