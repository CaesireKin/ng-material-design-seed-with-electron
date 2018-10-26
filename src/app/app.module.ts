import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialDesignModule} from './material-design.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Material Design Require Browser Animation
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
