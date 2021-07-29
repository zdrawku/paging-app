import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridComponent } from './grid/grid.component';
import { IgxGridModule, IgxActionStripModule, IgxInputGroupModule, IgxFocusModule } from 'igniteui-angular';
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
    HttpClientModule,
    IgxActionStripModule,
    IgxInputGroupModule,
    IgxFocusModule
  ],
  providers: [RemotePagingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
