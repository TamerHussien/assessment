import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DepserviceService } from './services/depservice.service';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SchooldetailComponent } from './schooldetail/schooldetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SchooldetailComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,
    FlexLayoutModule,
    SchooldetailComponent
  ],
  providers: [DepserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
