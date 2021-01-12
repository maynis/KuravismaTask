import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { StopDetailsComponent } from './stop-details/stop-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DepartureComponent } from './departure/departure.component';

@NgModule({
  declarations: [
    AppComponent,
    StopListComponent,
    StopDetailsComponent,
    DepartureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
