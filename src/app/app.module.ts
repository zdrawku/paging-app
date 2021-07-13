import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridComponent } from './grid/grid.component';
import { IgxGridModule } from 'igniteui-angular';
import { RemotePagingService } from './services/remotePaging.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    HttpClientModule
  ],
  providers: [RemotePagingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
