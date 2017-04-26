import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { DatePickerDirective } from './directives/datepicker.directive';
import { TimePickerDirective } from './directives/timepicker.directive';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerDirective,
    TimePickerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
