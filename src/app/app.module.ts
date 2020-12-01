import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    ImpressumComponent,
    FooterComponent,
    NavbarComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
