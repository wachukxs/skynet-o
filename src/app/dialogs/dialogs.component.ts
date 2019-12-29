import { Component, OnInit, Inject } from '@angular/core';
import { NgModule } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import {MatExpansionModule, MatExpansionPanelHeader, MatExpansionPanelDescription} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
  arr: Array<any>;
  dep: Array<any>;
}


@NgModule({
  imports: [
    /* MatExpansionPanelDescription,
    MatExpansionModule,
    MatExpansionPanelHeader, */
    // MatDialog,
  ],
})


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  // https://www.world-airport-codes.com/world-top-30-airports.html
}
