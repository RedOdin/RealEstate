import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestComponent } from './components/home/invest/invest.component';
import { LayoutComponent } from './components/home/layout/layout.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';
import { InfoLayoutComponent } from './components/home/info-layout/info-layout.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { BottomNavbarComponent } from './components/home/bottom-navbar/bottom-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestComponent,
    LayoutComponent,
    GalleryComponent,
    InfoLayoutComponent,
    NavbarComponent,
    BottomNavbarComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
