import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {DxButtonModule,DxSelectBoxModule,DxCheckBoxModule,DxTextBoxModule,DxTextAreaModule,DxDropDownBoxModule,DxCalendarModule,DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule,DxButtonModule,DxSelectBoxModule,DxTextBoxModule,DxTextAreaModule,DxDropDownBoxModule,DxCalendarModule,DxDataGridModule  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
