import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestComponent } from './components/invest/invest.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoLayoutComponent } from './components/info-layout/info-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestComponent,
    LayoutComponent,
    GalleryComponent,
    InfoLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
