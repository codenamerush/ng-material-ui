import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NewFormComponent } from './new-form/new-form.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
