import { Component, OnInit, Inject } from '@angular/core';
// import { NgModule } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

// import {MatExpansionModule, MatExpansionPanelHeader, MatExpansionPanelDescription} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
  arr: Array<any>;
  dep: Array<any>;
}


/* @NgModule({
  imports: [
  ],
}) */


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
  panelOpenState = false;
  selected: string;
  time: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    console.log(`${type}: ${event.value.toDateString()}`);
    this.time = event.value.toDateString();
  }

  ngOnInit() {
  }
  // https://www.world-airport-codes.com/world-top-30-airports.html
}
